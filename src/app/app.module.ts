import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalculationsModule} from './calculations/calculations.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        SharedModule,
        CalculationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
