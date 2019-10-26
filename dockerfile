FROM node:10

WORKDIR /usr/src/

COPY package.json yarn.lock ./
# COPY package.json package-lock.json ./

RUN yarn
# npm i

# Bundle project
COPY . .

ENV PORT 4000
ENV NODE_ENV=development

EXPOSE 4000

CMD [ "node", "src/server/index.js"]
# CMD yarn start:dev
