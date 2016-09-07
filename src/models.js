"use strict";
const config_1 = require('./config');
exports.bookshelf = Bookshelf(config_1.knex);
const Bookshelf = require('bookshelf');
var models;
(function (models) {
    class User extends exports.bookshelf.Model {
        get tableName() {
            return 'users';
        }
    }
    class Exercise extends exports.bookshelf.Model {
        get tableName() {
            return 'exercises';
        }
    }
})(models || (models = {}));
//# sourceMappingURL=models.js.map