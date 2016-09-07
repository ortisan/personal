import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {DashboardComponent} from './dashboard.component';
import {UsersDetailComponent} from './users-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: UsersDetailComponent
    },

];

export const routing = RouterModule.forRoot(appRoutes);
