FROM node:12

RUN npm install -g @angular/cli@8.*

WORKDIR /usr/src/app