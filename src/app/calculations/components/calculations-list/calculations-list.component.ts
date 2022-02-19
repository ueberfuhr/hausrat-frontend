import {Component, OnInit} from '@angular/core';
import {CalculationsService} from '../../services/calculations.service';
import {CalculationResult} from '../../models/calculation-result.model';
import {CalculationRequest} from '../../models/calculation-request.model';
import {ToastService} from '../../../toast/services/toast.service';
import {ToastType} from '../../../toast/models/toast-type';

@Component({
    selector: 'app-calculations-list',
    templateUrl: './calculations-list.component.html',
    styleUrls: ['./calculations-list.component.scss']
})
export class CalculationsListComponent implements OnInit {

    results: CalculationResult[] = [];

    constructor(private readonly todosService: CalculationsService,
                private readonly toastService: ToastService) {
    }

    ngOnInit(): void {
        this.refreshData(false);
    }

    refreshData(toast: boolean): void {
        this.todosService.getAll()
            .then(result => {
                this.results = result;
                if (toast) {
                    this.toastService.show({
                        message: 'Daten erfolgreich aktualisiert',
                        type: ToastType.INFO
                    });
                }
            });
    }

    onProcessRequest(newRequest: CalculationRequest): void {
        this.todosService.process(newRequest)
            .then(result => {
                this.results.unshift(result);
            });
    }
}
