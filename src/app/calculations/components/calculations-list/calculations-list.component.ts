import {Component, OnInit} from '@angular/core';
import {CalculationsService} from '../../services/calculations.service';
import {CalculationResult} from '../../models/calculation-result.model';
import {CalculationRequest} from '../../models/calculation-request.model';

@Component({
    selector: 'app-calculations-list',
    templateUrl: './calculations-list.component.html',
    styleUrls: ['./calculations-list.component.scss']
})
export class CalculationsListComponent implements OnInit {

    results: CalculationResult[] = [];

    constructor(private todosService: CalculationsService) {
    }

    ngOnInit(): void {
        this.todosService.getAll()
            .then(result => this.results = result);
    }

    onProcessRequest(newRequest: CalculationRequest): void {
        this.todosService.process(newRequest)
            .then(result => {
                this.results.unshift(result);
            });
    }
}
