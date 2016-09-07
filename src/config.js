"use strict";
const bunyan = require('bunyan');
exports.knex = require('knex')({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123456',
        database: 'personal',
        charset: 'utf8'
    }
});
exports.logger = bunyan.createLogger({
    name: "Personal", streams: [{
            path: __dirname + '/personal.log'
        }]
});
//# sourceMappingURL=config.js.map