FROM node:22.14.0-slim

EXPOSE 3000

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

COPY . .

ARG VITE_BACKEND_URL

ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

CMD ["npm", "run", "dev"]
