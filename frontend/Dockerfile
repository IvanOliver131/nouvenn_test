FROM node:12-alpine

RUN apk add --no-cache bash
RUN npm config set cache /home/node/app/.npm-cache --global
RUN npm install -g @angular/cli

USER node
WORKDIR /home/node/app