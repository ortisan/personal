"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require('@angular/core');
const users_service_1 = require('./users.service');
let UsersComponent = class UsersComponent {
    constructor(router, usersService) {
        this.router = router;
        this.usersService = usersService;
        this.usersService = usersService;
    }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        this.usersService.getHeroes().then((heroes) => {
            this.heroes = heroes;
        });
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
};
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: 'app/templates/heroes-template.html',
        providers: [users_service_1.UsersService]
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map