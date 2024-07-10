
FROM node:alpine3.20

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]

