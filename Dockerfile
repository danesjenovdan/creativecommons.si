# start with the nodejs image, calling it 'build'
FROM node:16-alpine as build
RUN apk add --update --no-cache python3 make g++

# install node modules
# COPY package.json yarn.lock /
COPY package.json /
RUN npm install

# build assets
COPY . .
EXPOSE 8080

RUN npm run build

# change base image
FROM nginx:alpine

# copy built files from the 'build' container into the nginx container
COPY --from=build dist /usr/share/nginx/html