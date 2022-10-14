## Microservices and Files

- Producer Service
- Consumer Service
- Api Gateway
- Postman JSON file

## Installation

- Create empty database in postgres
- Update `.env` files in producer-service, consumer-service

```bash
$ cd api-gateway && npm install && cd ..
$ cd consumer-service && npm install && cd ..
$ cd producer-service && npm install && cd ..
```

## Running the app

1- Open all services in a separate terminal
2- Run Producer Service First (Creates the miner database schema)

```bash
# development
$ cd producer-service && npm run start
```

3- Run Consumer Service

```bash
# development
$ cd consumer-service && npm run start
```

4- Run Api Gateway

```bash
# development
$ cd api-gateway && npm run start
```
