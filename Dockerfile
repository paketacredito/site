FROM node:8

EXPOSE 8001

RUN npm install -g gatsby-cli yarn

WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["gatsby", "develop", "-p", "8001" ,"-H", "0.0.0.0" ]