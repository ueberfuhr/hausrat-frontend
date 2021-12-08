import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from '../environments/environment.prod';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private userProfile?: object;

    constructor(private readonly authService: OAuthService) {
    }

    get hasValidAccessToken(): boolean {
        return this.authService.hasValidAccessToken();
    }

    async login(): Promise<void> {
        // Tweak config for implicit flow
        this.authService.configure(authConfig);
        await this.authService.loadDiscoveryDocument();
        sessionStorage.setItem('flow', 'implicit');

        this.authService.initLoginFlow();
        // the parameter here is optional. It's passed around and can be used after logging in
    }

    async loginInPopup(): Promise<void> {
        // Tweak config for implicit flow
        this.authService.configure(authConfig);
        await this.authService.loadDiscoveryDocument();
        sessionStorage.setItem('flow', 'implicit');

        this.authService.initLoginFlowInPopup().then(() => {
            this.loadUserProfile();
        });
        // the parameter here is optional. It's passed around and can be used after logging in
    }

    logout(): void {
        // this.oauthService.logOut();
        this.authService.revokeTokenAndLogout();
    }

    loadUserProfile(): void {
        this.authService.loadUserProfile().then((up) => (this.userProfile = up));
    }

}
