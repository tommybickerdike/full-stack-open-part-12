FROM node:16

USER node
  
WORKDIR ./

COPY --chown=node:node . .

RUN npm install

ENV DEBUG=playground:*

CMD npm run dev