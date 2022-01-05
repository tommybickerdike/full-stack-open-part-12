FROM node:15
  
WORKDIR ./

COPY . .

RUN npm install

CMD npm run dev