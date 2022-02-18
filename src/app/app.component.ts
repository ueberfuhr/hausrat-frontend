import {Component} from '@angular/core';
import {AuthenticationService} from './security/services/authentication.service';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private readonly authService: AuthenticationService
    ) {
    }

    get authenticated(): boolean {
        return this.authService.authenticated;
    }

    get secured(): boolean {
        return environment.secured;
    }



}
