FROM node:14-alpine

#set the working directory
WORKDIR /app

#copy the package.json into my /app directory the * indicates everything including the package-lock.json
COPY package*.json ./

# now installing the dependencies
RUN npm install

ENV REACT_APP_API_HOST=https://thebasic-bank-server-540feefa2a06.herokuapp.com

#copying all of the files to my images root
COPY . .

#now run the build command to build the full application and create the build folder
RUN npm run build

#now opening the apps port 3000
EXPOSE 3000

#starting the application
CMD ["npm", "start"]
