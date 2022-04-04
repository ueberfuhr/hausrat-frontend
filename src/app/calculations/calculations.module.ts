import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LocalDateValueAccessorModule} from 'angular-date-value-accessor';
import {CalculationsListComponent} from './components/calculations-list/calculations-list.component';
import {ViewCalculationComponent} from './components/view-calculation/view-calculation.component';
import {EditCalculationComponent} from './components/edit-calculation/edit-calculation.component';
import {NgxSnakeToCamelModule} from 'ngx-snake-to-camel';


@NgModule({
  declarations: [CalculationsListComponent, ViewCalculationComponent, EditCalculationComponent],
  exports: [
    CalculationsListComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        NgxSnakeToCamelModule.forRoot(),
        FormsModule,
        LocalDateValueAccessorModule
    ]
})
export class CalculationsModule {
}
