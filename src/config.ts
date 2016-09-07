import * as bunyan  from 'bunyan';

export const knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123456',
        database: 'personal',
        charset: 'utf8'
    }
});

export const logger = bunyan.createLogger({
    name: "Personal", streams: [{
        path: __dirname + '/personal.log'
    }]
});


