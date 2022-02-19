import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthenticatorComponent} from './authenticator.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';

describe('AuthenticatorComponent', () => {
    let component: AuthenticatorComponent;
    let fixture: ComponentFixture<AuthenticatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OAuthModule.forRoot(),
                HttpClientModule
            ],
            declarations: [AuthenticatorComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthenticatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
