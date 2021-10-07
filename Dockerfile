FROM node:12-alpine 
WORKDIR /app
COPY package.json /app/package.json
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
COPY . /app
#RUN npm run build
#FROM node:12-alpine
#WORKDIR /app
#COPY --from=builder /app/dist /app
#COPY package.json /app/package.json
#RUN apk --no-cache add --virtual builds-deps build-base python
#RUN npm install
EXPOSE 3001
#USER node
CMD ["node", "server.js"]