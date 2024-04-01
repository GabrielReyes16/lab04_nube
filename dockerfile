FROM node:latest

WORKDIR /home/greyes/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 10102

CMD ["node", "app.js"]
