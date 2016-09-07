import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    selector: 'my-user-detail',
    templateUrl: 'app/templates/user-detail-template.html',
    providers: [UsersService]
})
export class UsersDetailComponent implements OnInit {
    @Input()
    user: User;

    constructor(private usersServices: UsersService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((param: Params) => {
            let id = param['id'];
            this.usersServices.getUser(id);
        });
    }

    goBack(): void {
        window.history.back();
    }
}
