FROM node:10

WORKDIR /usr/src/

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]
