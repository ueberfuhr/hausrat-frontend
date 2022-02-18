import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from '../../../environments/environment.prod';
import {TokenResponse} from 'angular-oauth2-oidc/types';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private readonly authService: OAuthService) {
    }

    get authenticated(): boolean {
        return this.authService.hasValidAccessToken();
    }

    async login(user: string, password: string): Promise<TokenResponse> {
        // Tweak config for implicit flow
        this.authService.configure(authConfig);
        sessionStorage.setItem('flow', 'implicit');
        await this.authService.loadDiscoveryDocument();
        return this.authService.fetchTokenUsingPasswordFlow(user, password);
    }

    logout(): void {
        this.authService.logOut();
    }
}
