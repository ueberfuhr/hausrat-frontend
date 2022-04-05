import {Component, Input} from '@angular/core';
import {CalculationResult} from '../../models/calculation-result.model';

@Component({
    selector: 'app-view-calculation',
    templateUrl: './view-calculation.component.html',
    styleUrls: ['./view-calculation.component.scss']
})
export class ViewCalculationComponent {

    @Input() calculation?: CalculationResult;

}
