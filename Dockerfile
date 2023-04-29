FROM node

WORKDIR /usr/app

COPY package.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate
RUN apt-get update && \
    apt-get install -y postgresql-client

COPY . .

EXPOSE 3080

CMD ["npm", "run", "start"]
