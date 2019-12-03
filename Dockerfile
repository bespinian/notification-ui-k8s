FROM node:current as builder
WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run build:prd

FROM nginxinc/nginx-unprivileged:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf.tpl /etc/nginx/nginx.conf.tpl
CMD envsubst '$API_URL' < /etc/nginx/nginx.conf.tpl > /tmp/nginx.conf && exec nginx -c /tmp/nginx.conf -g 'daemon off;'
