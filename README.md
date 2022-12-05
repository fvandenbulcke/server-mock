# server-mock
a server mock with nestjs behind firebase authentication
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support
### Views

To display mock management view, visit `http://localhost:3000/mock-server`


### Apis

Request to recover all products
```
curl --location --request GET 'http://localhost:3000/mock/catalog' \
--header 'Content-Type: application/json' \
--data-raw '{
  "domain": "catalog"
}'
```

Response:
```json
{
    "path": "/catalog",
    "name": "all products"
}
```

Request to recover a product
```
curl --location --request GET 'http://localhost:3000/mock/catalog/123456' \
--header 'Content-Type: application/json' \
--data-raw '{
  "domain": "catalog"
}'
```

Response:
```json
{
    "path": "/catalog",
    "name": "product 123456"
}
```

Request to recover all stores
```
curl --location --request GET 'http://localhost:3000/mock/store' \
--header 'Content-Type: application/json' \
--data-raw '{
  "domain": "store"
}'
```

Response:
```json
{
    "path": "/store",
    "name": "all stores"
}
```
