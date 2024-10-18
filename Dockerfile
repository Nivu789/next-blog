FROM node:22.10.0-bullseye-slim

WORKDIR /app

COPY package* .
RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]