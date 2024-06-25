FROM node:20-slim

WORKDIR /usr/src/client-app

COPY ./package*.json ./
RUN npm install

COPY . .

COPY .env .

RUN apt-get update && apt-get install -y curl

EXPOSE 3000

CMD ["npm", "start"]