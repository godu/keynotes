FROM node:alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install && npm cache clean --force

COPY index.js test.js /app/

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]
