import {Component, OnDestroy, OnInit} from '@angular/core';
import {CalculationsService} from '../../services/calculations.service';
import {CalculationResult} from '../../models/calculation-result.model';
import {CalculationRequest} from '../../models/calculation-request.model';
import {ToastService} from '../../../toast/services/toast.service';
import {ToastType} from '../../../toast/models/toast-type';
import {Subscription} from 'rxjs';
import {ChangeEventType} from '../../models/change-event';

@Component({
    selector: 'app-calculations-list',
    templateUrl: './calculations-list.component.html',
    styleUrls: ['./calculations-list.component.scss']
})
export class CalculationsListComponent implements OnInit, OnDestroy {

    private calculationsSubscription?: Subscription;
    results: CalculationResult[] = [];

    constructor(private readonly calculationsService: CalculationsService,
                private readonly toastService: ToastService) {
    }

    ngOnInit(): void {
        this.calculationsSubscription = this.calculationsService.calculationsChanged.subscribe(event => {
            switch (event.type) {
                case ChangeEventType.Created:
                    this.results.unshift(event.value);
                    break;
                case ChangeEventType.Deleted:
                    this.results = this.results
                        .filter(result => result.id !== event.value.id);
                    break;
                case ChangeEventType.Updated:
                    this.results = this.results
                        .map(existing => existing.id === event.value.id ? event.value : existing);
                    break;
            }
        });
        this.refreshData(false);
    }

    ngOnDestroy(): void {
        this.calculationsSubscription?.unsubscribe();
    }

    refreshData(toast: boolean): void {
        this.calculationsService.loadAll()
            .subscribe(result => {
                this.results = result;
                if (toast) {
                    this.toastService.show({
                        message: 'Daten erfolgreich aktualisiert',
                        type: ToastType.INFO
                    });
                }
            }); // automatically unsubscribed
    }

    onProcessRequest(newRequest: CalculationRequest): void {
        this.calculationsService.process(newRequest).subscribe(); // automatically unsubscribed
    }
}
