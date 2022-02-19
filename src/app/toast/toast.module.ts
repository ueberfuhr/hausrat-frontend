import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastContainerComponent} from './components/toast-container/toast-container.component';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        ToastContainerComponent,
    ],
    exports: [
        ToastContainerComponent,
    ],
    imports: [
        CommonModule,
        NgbToastModule,
    ]
})
export class ToastModule {
}
