# Building the ReactJs app

FROM node as react-build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 -> Web Server configuration

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]