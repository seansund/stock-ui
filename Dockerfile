FROM registry.access.redhat.com/ubi8/nodejs-10

RUN mkdir app

# Install npm production packages
COPY package.json ./app
COPY package-lock.json ./app
COPY .babelrc ./app
COPY tsconfig.json ./app

COPY client/package.json ./app/client
COPY client/package-lock.json ./app/client
COPY client/build ./app/client/build
COPY client/config ./app/client/config
COPY client/public ./app/client/public
COPY client/scripts ./app/client/scripts
COPY client/src ./app/client/src

COPY public ./app/public
COPY scripts ./app/scripts
COPY server ./app/server
COPY test ./app/test

RUN cd ./app; npm install --production

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000/tcp

WORKDIR ./app

CMD ["npm", "start"]



