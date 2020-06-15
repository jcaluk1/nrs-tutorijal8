FROM node:10
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8888
ENTRYPOINT npm start