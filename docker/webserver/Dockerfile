FROM node

RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json index.js test.js /app/
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]
