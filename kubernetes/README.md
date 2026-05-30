# Kubernetes Deployment — Smart City

Raw K8s manifests. Apply order is preserved by the filename prefix (00-, 01-, 10-, 11-, 20-).

## Prerequisites

- A running cluster (Minikube locally, or K3s on AWS EC2 via Terraform).
- `kubectl` configured to point at the cluster (`kubectl config current-context`).
- Nginx Ingress Controller installed in the cluster.
- Backend container image loaded / pushed and reachable.

## Step 1 — Create namespace + config

```bash
kubectl apply -f kubernetes/00-namespace.yaml
kubectl apply -f kubernetes/01-config.yaml
```

## Step 2 — Create the Secret from your `backend/.env`

This packages all backend env vars (MONGO_URI, JWT, Razorpay, Ticketmaster, etc.)
into a Kubernetes Secret so the backend pod gets them via `envFrom`.

```bash
kubectl create secret generic smart-city-secrets \
  --from-env-file=backend/.env \
  --namespace=smart-city \
  --dry-run=client -o yaml | kubectl apply -f -
```

> ⚠️ `--from-env-file` ignores commented lines but reads each `KEY=value` line.

## Step 3 — Load images into the cluster

### On Minikube (local):
```bash
docker build -t smart-city/backend:dev ./backend
docker build --build-arg VITE_API_URL=/api \
             --build-arg VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
             -t smart-city/frontend:dev ./frontend
minikube image load smart-city/backend:dev
minikube image load smart-city/frontend:dev
```

### On AWS K3s:
Push to Docker Hub first, then change `imagePullPolicy: Always` and the image
to e.g. `ayushgupta/smart-city-backend:v1`.

## Step 4 — Apply the workloads + ingress

```bash
kubectl apply -f kubernetes/10-backend.yaml
kubectl apply -f kubernetes/11-frontend.yaml
kubectl apply -f kubernetes/20-ingress.yaml
```

## Step 5 — Wait + verify

```bash
kubectl -n smart-city wait --for=condition=available deployment --all --timeout=180s
kubectl -n smart-city get pods,svc,ingress
```

## Step 6 — Access the app

### On Minikube:
```bash
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
# open http://localhost:8080
```

### On AWS K3s:
Visit `http://<EC2-PUBLIC-IP>/` (Ingress is served from the node).

## Rollback

```bash
kubectl -n smart-city rollout undo deployment/smart-city-backend
kubectl -n smart-city rollout undo deployment/smart-city-frontend
```
