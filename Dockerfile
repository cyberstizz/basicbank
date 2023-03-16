FROM node:14-alpine

#set the working directory
WORKDIR /app

#copy the package.json into my /app directory the * indicates everything including the package-lock.json
COPY package*.json ./