FROM node:16-alpine as build

WORKDIR /

COPY . .

ENV NODE_ENV=development
RUN npm install
RUN npm run build

FROM nginx:1.18.0-alpine as final

WORKDIR /
COPY --from=build ./dist /usr/share/nginx/html