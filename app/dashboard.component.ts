import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from './user';
import {UsersService} from './users.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/templates/dashboard-template.html',
    providers: [UsersService]
})
export class DashboardComponent implements OnInit {

    users: User[] = [];

    constructor(private router: Router, private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.usersService.getUsers()
            .then(heroes => this.users = heroes.slice(1, 5));
    }

    gotoDetail(user: User): void {
        let link = ['/detail', user.id];
        this.router.navigate(link);
    }

}
