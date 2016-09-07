"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require('@angular/core');
const users_service_1 = require('./users.service');
let UsersDetailComponent = class UsersDetailComponent {
    constructor(usersServices, route) {
        this.usersServices = usersServices;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.forEach((param) => {
            let id = param['id'];
            this.usersServices.getHero(id);
        });
    }
    goBack() {
        window.history.back();
    }
};
__decorate([
    core_1.Input()
], UsersDetailComponent.prototype, "user", void 0);
UsersDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        templateUrl: 'app/templates/hero-detail-template.html',
        providers: [users_service_1.UsersService]
    })
], UsersDetailComponent);
exports.UsersDetailComponent = UsersDetailComponent;
//# sourceMappingURL=users-detail.component.js.map