FROM node:22.10.0-bullseye-slim

WORKDIR /app

COPY package* .
RUN npm install
COPY . .

RUN npx prisma generate


EXPOSE 3000

CMD ["npm","run","dev"]