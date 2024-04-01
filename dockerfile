FROM node:latest

WORKDIR /home/greyes/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 10101

CMD ["node", "app.js"]
