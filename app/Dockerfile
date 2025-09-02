FROM node:24-alpine3.21 AS base

RUN npm install -g pnpm@latest-10

FROM base AS dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
ENV CI=true
RUN pnpm install --frozen-lockfile

FROM base AS build

ARG version
ENV VITE_VERSION=${version}

ENV NODE_ENV=production
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm dist
RUN rm -rf node_modules

FROM nginx:1.29.1-alpine-slim AS deploy

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/docker-add-config.sh /

ENTRYPOINT ["sh", "docker-add-config.sh"]

CMD ["nginx", "-g", "daemon off;"]
