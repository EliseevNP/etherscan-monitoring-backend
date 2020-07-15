FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY tsconfig.json ./

CMD ["npm", "run", "dev"]
