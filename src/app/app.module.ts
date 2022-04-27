import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalculationsModule} from './calculations/calculations.module';
import {ToastModule} from './toast/toast.module';
import {SecurityModule} from './security/security.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        CalculationsModule,
        ToastModule,
        SecurityModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
