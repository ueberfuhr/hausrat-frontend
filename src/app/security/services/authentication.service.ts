import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from '../../../environments/environment.prod';
import {OAuthSuccessEvent} from 'angular-oauth2-oidc/events';
import {TokenResponse} from 'angular-oauth2-oidc/types';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private readonly authService: OAuthService) {
    }

    isAuthenticated(): boolean {
        return this.authService.hasValidAccessToken();
    }

    async login(user: string, password: string): Promise<TokenResponse> {
        // Tweak config for implicit flow
        this.authService.configure(authConfig);
        sessionStorage.setItem('flow', 'implicit');
        return this.authService.loadDiscoveryDocument().then((resp: OAuthSuccessEvent) => {
            return this.authService.fetchTokenUsingPasswordFlow(user, password);
        });
    }

    logout(): void {
        this.authService.logOut();
    }
}
