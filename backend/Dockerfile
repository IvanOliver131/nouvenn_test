FROM node:12-alpine
RUN apk add --no-cache bash
RUN npm config set cache /home/node/app/.npm-cache --global
RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc
RUN npm install yarn
RUN npm install npx
RUN yarn add sequelize
COPY package.json /app
COPY .env /app
USER node
WORKDIR /home/node/app