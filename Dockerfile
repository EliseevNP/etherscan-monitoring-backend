FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY ./src ./src
COPY tsconfig.json ./

CMD ["npm", "start"]
