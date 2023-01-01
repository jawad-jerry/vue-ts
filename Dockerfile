FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE  5173
cmd ["npm","run", "dev"]







