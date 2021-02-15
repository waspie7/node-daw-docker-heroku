FROM node:14-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app
# This tells Docker to use this path as the default location
WORKDIR /app

# files to be copy into our working directory /app
COPY ["package.json","package-lock.json","./"]

USER node
RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

# Telling docker what command we want to run when our image is run inside a container
CMD ["node","app.js"]
