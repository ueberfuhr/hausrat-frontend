import {Inject, Injectable} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {TokenResponse} from 'angular-oauth2-oidc/types';
import {AUTH_CONFIG} from '../../../environments/app-config.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private readonly authService: OAuthService,
                @Inject(AUTH_CONFIG) private readonly authConfig: AuthConfig) {
    }

    get secured(): boolean {
        return this.authConfig !== undefined;
    }

    get authenticated(): boolean {
        return this.authService.hasValidAccessToken();
    }

    async login(user: string, password: string): Promise<TokenResponse> {
        // Tweak config for implicit flow
        this.authService.configure(this.authConfig);
        sessionStorage.setItem('flow', 'implicit');
        await this.authService.loadDiscoveryDocument();
        return this.authService.fetchTokenUsingPasswordFlow(user, password);
    }

    logout(): void {
        this.authService.logOut();
    }
}
