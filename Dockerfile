FROM node:14-alpine

#set the working directory
WORKDIR /app

#copy the package.json into my /app directory the * indicates everything including the package-lock.json
COPY package*.json ./

# now installing the dependencies
RUN npm install

#copying all of the files to my images root
COPY . .

#now run the build command to build the full application and create the build folder
RUN npm run build

#now opening the apps port 3000
Expose 3000