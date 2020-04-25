FROM node:13

WORKDIR /usr/src/app

COPY *.* ./
COPY src ./src

RUN npm install

RUN npm run build

CMD ["npm", "start"]