FROM node:18-alpine AS builder
WORKDIR /FRONT1

COPY package*.json ./
RUN npm install

COPY . . 
RUN npm run build

# CMD ["npm", "start"]
