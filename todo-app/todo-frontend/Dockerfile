# The first FROM is now a stage called build-stage
FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci --only=production

RUN CI=true npm test

ENV REACT_APP_BACKEND_URL=/api/

RUN npm run build

RUN npm install -g serve

USER node

CMD serve -s build