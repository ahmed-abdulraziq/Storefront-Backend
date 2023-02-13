# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

### Running Ports 
the database will start on port `5432`
the server will start on port `3000` 

### Environment Variables

```
# default env
ENV=dev

# database for dev
DATABASE_DEV=dev

# database for test
DATABASE_TEST=test

#host
HOST=localhost

# password for database
PASSWORD=01023749189

# user for database
USER=postgres

# port number
PORT=5432

# jwt
JWT = 0QaNrinsgGlwFVvSyluML14GCIe0tVOqQRN/WRlOidw=

#token for test
TOKEN = eyJhbGciOiJIUzI1NiJ9.MQ.CnKOwBExSeWUzpGc6-Php9Z1vNpHkf5UTR2lb1WxVcc
```

### Package installation instructions

#### dependencies
    `bcrypt`
    `body-parser`
    `db-migrate-pg`
    `dotenv`
    `express`
    `jsonwebtoken`
    `pg`
    `typescript`

#### devDependencies
    `@types/bcrypt`
    `@types/express`
    `@types/jasmine`
    `@types/jsonwebtoken`
    `@types/pg`
    `@types/supertest`
    `jasmine`
    `jasmine-spec-reporter`
    `supertest`
    `ts-node`
    `tsc-watch`

### Setup db and server instructions

#### Clone the project

```shell
$ git clone https://github.com/ahmed-abdulraziq/Storefront-Backend.git
```

#### Run

```shell
 cd Storefront-Backend
 npm i
 npm start
```

#### Initialize PostgreSQL and connect to database

start PostgreSQL `$ psql -h localhost -U postgres`
create database for dev `$ CREATE DATABASE dev` or test `$ CREATE DATABASE test`
list out all databases `$ \dt`
connect to database dev `$ \c dev` or test `$ \c test`
quit PostgreSQL `$ \q`

