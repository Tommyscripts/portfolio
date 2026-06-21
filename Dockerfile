FROM node:22-alpine AS development-dependencies-env
WORKDIR /app
COPY . /app
RUN corepack enable && pnpm install --frozen-lockfile

FROM node:22-alpine AS production-dependencies-env
WORKDIR /app
COPY ./package.json pnpm-lock.yaml /app/
RUN corepack enable && pnpm install --frozen-lockfile --prod

FROM node:22-alpine AS build-env
WORKDIR /app
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
RUN corepack enable && pnpm run build

FROM node:22-alpine
WORKDIR /app
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
CMD ["pnpm", "run", "start"]