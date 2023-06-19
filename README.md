![MinhaCena](https://raw.githubusercontent.com/MinhaCena/.github/main/MinhaCena.jpeg)


# O que é o MinhaCena.org?

O [MinhaCena.Org](https://minhacena.org) é uma ferramenta de impacto social e educacional, que propõe estimular a escrita, leitura e produção de arte de alunos de escolas publicas, privadas e ONGs de contra turno escolar. A plataforma conecta professores de Português e Artes, que cadastram redações de seus alunos (onde essas serão revisadas) a nossa comunidade de ilustradores voluntários que as transformarão em HQ (História em Quadrinhos), trazendo visibilidade aos artistas e dando suporte a forma pedagógica do professor leciona em seus projetos. O [MinhaCena.Org](https://minhacena.org) é uma das metodologias ativas voltadas ao ensino híbrido e com uso de tecnologia, que faz do aluno o protagonista no seu aprendizado.

## **Descrição do projeto**

Projeto de desenvolvimento de uma API contemplando todo o back-end do Minha Cena, incluindo a interação entre ilustradores e professores que será desenvolvida na plataforma e o painel administrativo.

## **Status do projeto**

Projeto em construção 

## **Linguagem**

TypeScript

## **Tecnologias utilizadas**

* Node.js
* Prisma
* PostgreSQL
* NestJS
* Docker

## **Guia para executar o projeto**

* Pré requisitos

1. Instalar o [Node.js](https://nodejs.org/en/download)

2. Instalar o [Docker](https://www.docker.com/products/docker-desktop/)

3. Também é possível executar o projeto sem a instalação do Docker, mas será necessário instalar o [PostgreSQL](https://www.postgresql.org/download/) na máquina para conseguir rodar local.

## **Executando o projeto**

### Com Docker

```bash
$ git clone https://github.com/MinhaCena/minha-cena-backend.git
```
```bash
$ cd minha-cena-backend
```
```bash
$ npm install
```
```bash
$ docker compose up -d
```
```bash
$ npx prisma generate
```
```bash
$ npx prisma migrate dev
```
```bash
$ npm run start
```

### Sem Docker

```bash
$ git clone https://github.com/MinhaCena/minha-cena-backend.git
```
```bash
$ cd minha-cena-backend
```
```bash
$ npm install
```
```bash
$ npx prisma generate
```
```bash
$ npx prisma migrate dev
```
```bash
$ npm run start
```


## **Pessoas Desenvolvedoras**

- Thaís Minas
- Maísa Fernanda de Lima Castilho




