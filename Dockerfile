FROM node:dubnium

WORKDIR /usr/src/

COPY package.json yarn.lock ./
# COPY package.json package-lock.json ./

RUN yarn
# npm i

# Bundle project
# COPY nginx.conf /etc/nginx/nginx.conf
COPY . .

ENV PORT 4000
ENV NODE_ENV=development

EXPOSE 4000

CMD [ "node", "src/server/index.js"]
# CMD yarn start:dev
