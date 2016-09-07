import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from './user';
import {UsersService} from './users.service'


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes-template.html',
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    heroes: User[];

    hero: User;

    selectedHero: User;

    constructor(private router: Router, private usersService: UsersService) {
        this.usersService = usersService;
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.usersService.getHeroes().then((heroes: User[])=> {
            this.heroes = heroes;
        })
    }

    onSelect(hero: User) {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
