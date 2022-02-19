import {TestBed} from '@angular/core/testing';
import {HttpAuthenticationInterceptor} from './http-authentication.interceptor';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';

describe('HttpAuthenticationInterceptor', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            OAuthModule.forRoot(),
            HttpClientModule
        ],
        providers: [
            HttpAuthenticationInterceptor
        ]
    }));

    it('should be created', () => {
        const interceptor: HttpAuthenticationInterceptor = TestBed.inject(HttpAuthenticationInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
