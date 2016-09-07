import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {DashboardComponent}  from './dashboard.component';
import {UsersComponent}  from './users.component';
import {UsersDetailComponent}  from './users-detail.component';
import {routing} from './app.routing'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        UsersComponent,
        DashboardComponent,
        UsersDetailComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
