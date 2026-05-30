# syntax=docker/dockerfile:1.7
# Smart City Backend — multi-stage Node 22 Alpine image.

# ---- Stage 1: deps ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# ---- Stage 2: runtime ----
FROM node:22-alpine

# Non-root with numeric UID (Kubernetes runAsNonRoot verifies numeric)
RUN addgroup -g 1001 -S app && adduser -u 1001 -S app -G app

WORKDIR /app

COPY --from=deps --chown=1001:1001 /app/node_modules ./node_modules
COPY --chown=1001:1001 . .

USER 1001

ENV NODE_ENV=production \
    PORT=5000

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/',r=>process.exit(r.statusCode<500?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "server.js"]
