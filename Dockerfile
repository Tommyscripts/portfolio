FROM node:22-alpine AS builder
WORKDIR /app
COPY . /app
RUN corepack enable && pnpm approve-builds --all || true && pnpm install --frozen-lockfile
RUN pnpm run build
RUN pnpm prune --prod

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
EXPOSE 5173
CMD ["sh", "-c", "pnpm run preview --host 0.0.0.0 --port ${PORT:-5173}"]