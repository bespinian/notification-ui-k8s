FROM nginx
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD /bin/bash -c "exec nginx -g 'daemon off;'"
