#!/usr/bin/env bash
# scripts/deploy.sh — one-shot Smart City deploy to an existing K8s cluster.
# Usage:  ./scripts/deploy.sh
#
# Prereqs:
#   - kubectl context already points at target cluster
#   - Images already loaded (minikube) or pushed (cloud)
#   - backend/.env exists locally so the Secret can be generated from it

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NAMESPACE="smart-city"

echo "▶ Applying namespace + ConfigMap..."
kubectl apply -f "${ROOT}/kubernetes/00-namespace.yaml"
kubectl apply -f "${ROOT}/kubernetes/01-config.yaml"

echo "▶ Creating/updating Secret from backend/.env..."
if [ ! -f "${ROOT}/backend/.env" ]; then
  echo "ERROR: ${ROOT}/backend/.env not found"; exit 1
fi
kubectl create secret generic smart-city-secrets \
  --from-env-file="${ROOT}/backend/.env" \
  --namespace="${NAMESPACE}" \
  --dry-run=client -o yaml | kubectl apply -f -

echo "▶ Applying workloads + ingress..."
kubectl apply -f "${ROOT}/kubernetes/10-backend.yaml"
kubectl apply -f "${ROOT}/kubernetes/11-frontend.yaml"
kubectl apply -f "${ROOT}/kubernetes/20-ingress.yaml"

echo "▶ Waiting for deployments to become ready..."
kubectl -n "${NAMESPACE}" wait --for=condition=available deployment --all --timeout=180s

echo "▶ Cluster state:"
kubectl -n "${NAMESPACE}" get pods,svc,ingress

echo
echo "✅ Smart City deployed. To access on Minikube:"
echo "   kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80"
echo "   open http://localhost:8080"
