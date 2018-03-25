# Vue, Node, Express, Sequelize, PostgreSQL and Vuetify
> This application uses: Vue 2, NodeJS, Express, Sequelize, PostGreSQL and Vuetify. System that allows to create Schedules.

>GooWil App 

![](login.png#)

![](screen.png#)

## Installation

BackEnd:

```sh
cd backend
npm install
```

FrontEnd:

```sh
cd frontend
npm install
```

## Usage
* It is necessary
    * Install PostgreSQL
    * Configuration of the PostgreSQL database [backend/server/config/config.json]
#### 
        
    {
      "development": {
        "username": "postgres",
        "password": "sample",
        "database": "goomi_dev",
        "host": "127.0.0.1",
        "port": 5432,
        "dialect": "postgres"
      }
      ...
    }

## Development setup

To run the application, it is necessary to have running the backend and frontend app

```sh
cd backend
npm start
```

```sh
cd frontend
npm run dev
```

## Release History

* 0.0.1
    * Work in progress

## Meta

Dheeyi William – [@YourTwitter](https://twitter.com/dheeyi) – dheeyi@gmail.com

See ``MIT LICENSE`` for more information.

[https://github.com/dheeyi/](https://github.com/dheeyi/)

