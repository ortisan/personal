import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from "@angular/http";

import {AppComponent}  from './app.component';
import {DashboardComponent}  from './dashboard.component';
import {UsersComponent}  from './users.component';
import {UsersDetailComponent}  from './users-detail.component';
import {routing, appRoutingProviders} from './app.routing'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
    ],
    declarations: [
        AppComponent,
        UsersComponent,
        DashboardComponent,
        UsersDetailComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
