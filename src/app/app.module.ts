import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './routing/components/navigation/navigation.component';
import {CalculationsModule} from './calculations/calculations.module';
import {SharedModule} from './shared/shared.module';
import {OAuthModule} from 'angular-oauth2-oidc';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        SharedModule,
        CalculationsModule,
        OAuthModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
