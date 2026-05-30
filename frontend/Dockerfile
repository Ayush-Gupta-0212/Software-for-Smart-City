# syntax=docker/dockerfile:1.7
# Smart City Frontend — Vite build → Nginx serve.

# ---- Stage 1: build ----
FROM node:22-alpine AS builder
WORKDIR /app

# install deps (cached layer)
COPY package*.json ./
RUN npm ci

# Build-time env vars (Vite bakes these into the bundle).
# Pass via:  docker build --build-arg VITE_API_URL=...
ARG VITE_API_URL=/api
ARG VITE_RAZORPAY_KEY_ID=
ARG VITE_MAPBOX_ACCESS_TOKEN=
ARG VITE_GOOGLE_MAPS_API_KEY=
ENV VITE_API_URL=$VITE_API_URL \
    VITE_RAZORPAY_KEY_ID=$VITE_RAZORPAY_KEY_ID \
    VITE_MAPBOX_ACCESS_TOKEN=$VITE_MAPBOX_ACCESS_TOKEN \
    VITE_GOOGLE_MAPS_API_KEY=$VITE_GOOGLE_MAPS_API_KEY

# copy source + build
COPY . .
RUN npm run build

# ---- Stage 2: serve ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
