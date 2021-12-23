FROM node:16

USER node
  
WORKDIR ./

COPY --chown=node:node . .

RUN npm install

CMD npm run dev