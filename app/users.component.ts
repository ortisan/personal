import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from './user';
import {UsersService} from './users.service'


@Component({
    selector: 'my-users',
    templateUrl: 'app/templates/users-template.html',
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    users: User[];

    user: User;

    selectedUser: User;


    constructor(private router: Router, private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.usersService.getUsers().then((users: User[])=> {
            this.users = users;
        });
    }

    onSelect(user: User) {
        this.selectedUser = user;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedUser.id]);
    }
}
