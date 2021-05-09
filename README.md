## Dockerfile


FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]

## create a .dockerignore and insert node_modules and npm-debug.log

docker build -t <app> .
docker images
docker rmi <image id> ## to remove an image

##run container
docker run -p 49165:port -d <app>

docker ps
docker stop <container id>
docker ps -a 
