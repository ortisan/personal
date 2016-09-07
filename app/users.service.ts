import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from './mock-users';


@Injectable()
export class UsersService {
    getHeroes(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getHero(id: Number): Promise<User> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id == id));
    }
}
