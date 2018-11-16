###
# PLANTUML
###
FROM think/plantuml as plantuml

RUN mkdir -p /app

COPY ./src /app/
RUN java -jar plantuml.jar -tsvg /app/**/*.plantuml

###
# NODE.JS
###
FROM node:alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install && npm cache clean --force


COPY --from=plantuml /app ./src

EXPOSE 3000
CMD [ "npm", "start" ]
