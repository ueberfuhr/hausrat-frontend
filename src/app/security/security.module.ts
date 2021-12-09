import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OAuthModule} from 'angular-oauth2-oidc';
import {AuthenticationService} from './services/authentication.service';
import {AuthenticatorComponent} from './components/authenticator/authenticator.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AuthenticatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        OAuthModule.forRoot()
    ],
    exports: [
        AuthenticatorComponent
    ],
    providers: [
        AuthenticationService
    ]
})
export class SecurityModule {
}
