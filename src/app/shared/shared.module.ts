import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastContainerComponent} from './components/toast-container/toast-container.component';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorToToastInterceptor} from './interceptors/http-error-to-toast.interceptor';


@NgModule({
    declarations: [ToastContainerComponent],
    imports: [
        CommonModule,
        NgbToastModule
    ],
    exports: [
        ToastContainerComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorToToastInterceptor, multi: true}
    ]
})
export class SharedModule {
}
