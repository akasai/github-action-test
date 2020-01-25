FROM node:12-alpine
#MAINTAINER

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm ci --production

COPY index.ts /usr/src/app

#COPY entrypoint.sh index.js /var/task/

#ENTRYPOINT ["./entrypoint.sh"]
CMD [ "npm", "run", "start:prod" ]
