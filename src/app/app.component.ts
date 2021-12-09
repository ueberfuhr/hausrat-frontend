import {Component} from '@angular/core';
import {AuthenticationService} from './security/services/authentication.service';

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

    get isAuthenticated(): boolean {
        return this.authService.isAuthenticated()
    }



}
