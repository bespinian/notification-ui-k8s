FROM node:current as builder
WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run build:prd

FROM nginxinc/nginx-unprivileged:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
