import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OAuthModule} from 'angular-oauth2-oidc';
import {AuthenticationService} from './services/authentication.service';
import {AuthenticatorComponent} from './components/authenticator/authenticator.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpAuthenticationInterceptor} from './interceptors/http-authentication.interceptor';


@NgModule({
    declarations: [
        AuthenticatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        OAuthModule.forRoot()
    ],
    exports: [
        AuthenticatorComponent
    ],
    providers: [
        AuthenticationService,
        {provide: HTTP_INTERCEPTORS, useClass: HttpAuthenticationInterceptor, multi: true}
    ]
})
export class SecurityModule {
}
