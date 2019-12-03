pid /tmp/nginx.pid;
events { worker_connections 1024; }

http {
    server {
        listen 8080;

        server_name localhost;

        location / {
            root /usr/share/nginx/html;

            index index.html;

            try_files $uri /index.html;

            location /api/ {
                proxy_pass $API_URL;
                proxy_http_version 1.1;
            }
        }
    }
}
