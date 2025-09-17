FROM node:22.14.0-slim

EXPOSE 3000

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

COPY . .

ARG VITE_API_URL

ENV VITE_API_URL=$VITE_API_URL

CMD ["npm", "run", "dev"]
