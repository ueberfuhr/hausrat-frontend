import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalculationsModule} from './calculations/calculations.module';
import {ToastModule} from './toast/toast.module';
import {SecurityModule} from './security/security.module';
import {API_ENDPOINT, APP_CONFIG, AUTH_CONFIG} from '../environments/app-config.model';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        CalculationsModule,
        ToastModule,
        SecurityModule
    ],
    providers: [
        {provide: APP_CONFIG, useValue: environment},
        {provide: AUTH_CONFIG, useValue: environment.authConfig},
        {provide: API_ENDPOINT, useValue: environment.apiEndpoint},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
