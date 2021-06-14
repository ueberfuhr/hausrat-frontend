import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LocalDateValueAccessorModule} from 'angular-date-value-accessor';
import {CalculationsListComponent} from './components/calculations-list/calculations-list.component';
import {ViewCalculationComponent} from './components/view-calculation/view-calculation.component';
import {EditCalculationComponent} from './components/edit-calculation/edit-calculation.component';


@NgModule({
  declarations: [CalculationsListComponent, ViewCalculationComponent, EditCalculationComponent],
  exports: [
    CalculationsListComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        LocalDateValueAccessorModule
    ]
})
export class CalculationsModule {
}
