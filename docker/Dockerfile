FROM node:8.17.0-buster

# use it to avoid unnecessaries warnings
ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["npm", "run", "dev"]
