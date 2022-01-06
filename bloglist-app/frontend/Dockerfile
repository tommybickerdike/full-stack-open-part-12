FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run eslint

RUN npm run build

RUN npm install -g serve

USER node

CMD serve -s build