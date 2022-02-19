import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CalculationRequest} from '../../models/calculation-request.model';


@Component({
    selector: 'app-edit-calculation',
    templateUrl: './edit-calculation.component.html',
    styleUrls: ['./edit-calculation.component.scss']
})
export class EditCalculationComponent {

    @Input() request: CalculationRequest = {product: 'OPTIMAL', livingArea: 100};
    @Output() requestEditDone = new EventEmitter<CalculationRequest>();

    minDueDate = new Date();

    // TODO we should read the options from the REST resource
    productOptions = ['COMPACT', 'OPTIMAL'];

    onSubmit(): void {
        this.requestEditDone.emit(this.request);
        // if the todo is a new one, reset the form
        this.request = {product: 'OPTIMAL', livingArea: 100};
    }

}
