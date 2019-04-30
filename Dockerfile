# stage 1
FROM node:latest as node
ENTRYPOINT ["ng", "serve", "-H", "0.0.0.0"]
WORKDIR usr/src/app
COPY . .
RUN npm install
RUN npm run build --prod

