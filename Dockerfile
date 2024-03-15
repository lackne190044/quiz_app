FROM node:21-alpine3.18

COPY app /home/app
WORKDIR /home/app

CMD ["npm", "i", "--include=dev"]
