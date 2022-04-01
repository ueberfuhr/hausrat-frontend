import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NavigationComponent} from './routing/components/navigation/navigation.component';
import {SecurityModule} from './security/security.module';
import {API_ENDPOINT, AUTH_CONFIG} from '../environments/app-config.model';
import {environment} from '../environments/environment';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SecurityModule
            ],
            declarations: [
                AppComponent,
                NavigationComponent
            ],
            providers: [
                {provide: AUTH_CONFIG, useValue: environment.authConfig},
                {provide: API_ENDPOINT, useValue: environment.apiEndpoint},
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render a container div', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.container-fluid')).toBeDefined();
    });
});
