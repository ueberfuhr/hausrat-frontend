import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalculationRequest} from '../../models/calculation-request.model';


@Component({
    selector: 'app-edit-calculation',
    templateUrl: './edit-calculation.component.html',
    styleUrls: ['./edit-calculation.component.scss']
})
export class EditCalculationComponent implements OnInit {

    @Input() request = new CalculationRequest('OPTIMAL', 100);
    @Output() requestEditDone = new EventEmitter<CalculationRequest>();

    minDueDate = new Date();

    // TODO we should read the options from the REST resource
    productOptions = ['COMPACT', 'OPTIMAL'];

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.requestEditDone.emit(this.request);
        // if the todo is a new one, reset the form
        this.request = new CalculationRequest('OPTIMAL', 100);
    }

}
