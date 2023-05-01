FROM nginx:stable-alpine

COPY ./nginx-config/default.conf.template /etc/nginx/templates/default.conf.template

COPY ./build /etc/nginx/html

CMD ["nginx", "-g", "daemon off;"]