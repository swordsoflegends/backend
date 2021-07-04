FROM node:15-alpine

WORKDIR /app
COPY . .
RUN yarn --production

CMD [ "yarn", "serve" ]
