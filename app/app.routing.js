"use strict";
const router_1 = require('@angular/router');
const users_component_1 = require('./users.component');
const dashboard_component_1 = require('./dashboard.component');
const users_detail_component_1 = require('./users-detail.component');
const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: users_detail_component_1.UsersDetailComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map