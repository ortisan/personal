import {Injectable, Inject} from '@angular/core';
import {User} from './user';
import {USERS} from './mock-users';
import {Http, Response} from "@angular/http";
import reject = require("lodash/reject");


@Injectable()
export class UsersService {

    constructor(@Inject(Http) private http: Http) {
    }

    getUsers(): Promise<User[]> {

        var self = this;

        return new Promise(function (resolve, reject) {
            self.http.get('http://localhost:8080/users').subscribe((res: Response) => {
                resolve(res.json());
            });
        });
    }

    getUser(id: Number): Promise<User> {
        return this.getUsers().then(users => users.find(user => user.id == id));
    }
}
