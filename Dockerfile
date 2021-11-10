FROM node:14.18-alpine3.12 as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY --from=builder /usr/src/app/dist/admin-dashboard-panel/ /usr/share/nginx/html
