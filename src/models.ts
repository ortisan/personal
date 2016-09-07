import {knex} from './config'

export const bookshelf = Bookshelf(knex);


import * as Bookshelf from 'bookshelf';

namespace models {

    class User extends bookshelf.Model<User> {
        get tableName() {
            return 'users';
        }
    }

    class Exercise extends bookshelf.Model<Exercise> {
        get tableName() {
            return 'exercises';
        }
    }

}