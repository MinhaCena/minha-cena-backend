FROM node

WORKDIR /usr/app

RUN apt-get update && \
    apt-get install -y postgresql-client

COPY src/ src/
COPY prisma/ prisma/
COPY templates/ templates/
COPY *.json .

RUN npm install
RUN npx prisma generate
RUN npm build

EXPOSE 3080

CMD ["npm", "run", "start"]
