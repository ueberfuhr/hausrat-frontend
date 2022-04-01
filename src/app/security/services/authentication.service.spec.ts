import {TestBed} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';
import {AUTH_CONFIG} from '../../../environments/app-config.model';
import {environment} from '../../../environments/environment';

describe('AuthenticationService', () => {
    let service: AuthenticationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                OAuthModule.forRoot(),
                HttpClientModule
            ],
            providers: [
                {provide: AUTH_CONFIG, useValue: environment.authConfig},
            ]
        });
        service = TestBed.inject(AuthenticationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
