FROM node:7.4.0

RUN npm install webpack -g

WORKDIR /tmp
COPY package.json /tmp/
# set registry for faster npm install
RUN npm config set registry http://registry.npmjs.org/ &&\
    npm install --loglevel warn

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

RUN webpack -p --hide-modules

ENV NODE_ENV=production
# ENV PORT=4000 # default is already 4000

CMD [ "/usr/local/bin/node", "./index.js" ]

EXPOSE 4000
