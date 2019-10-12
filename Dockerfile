FROM node:carbon-stretch-slim

COPY package.json ./

RUN npm install

RUN npm run build

COPY /out ./

CMD [ "node", "index.js" ]
