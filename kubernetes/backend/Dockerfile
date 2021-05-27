FROM node:14.15.4-alpine3.10

ENV CI=true

WORKDIR /app

COPY package.json ./

RUN npm install --verbose

EXPOSE 4000

COPY ./ ./

RUN npm run build

CMD [ "npm", "start" ]
