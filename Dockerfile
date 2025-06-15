FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN pwd
RUN npm install -f
COPY . .
RUN npm run build
RUN ls dist

FROM nginx:alpine AS runtime
COPY --from=builder /app/dist /usr/share/nginx/html
HEALTHCHECK CMD curl -f http://localhost || exit 1