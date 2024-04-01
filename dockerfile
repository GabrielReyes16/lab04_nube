FROM node:latest

WORKDIR /home/greyes/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 10160

CMD ["node", "app.js"]
