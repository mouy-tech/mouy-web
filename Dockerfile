# Base image
FROM node:20-alpine AS builder

ARG NEXT_PUBLIC_SERVER_URL=''

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

RUN yarn install 

EXPOSE 3000

CMD ["yarn", "start"]
