FROM node:21-alpine3.18

WORKDIR /home/node
RUN npm install -g @vue/cli
