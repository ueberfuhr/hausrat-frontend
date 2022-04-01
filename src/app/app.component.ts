import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from './security/services/authentication.service';
import {CalculationsService} from './calculations/services/calculations.service';
import {ToastService} from './toast/services/toast.service';
import {Subscription} from 'rxjs';
import {ToastType} from './toast/models/toast-type';
import {ChangeEventType} from './calculations/models/change-event';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    private calculationsSubscription?: Subscription;

    constructor(private readonly authService: AuthenticationService,
                private readonly calculationsService: CalculationsService,
                private readonly toastService: ToastService) {
    }

    ngOnInit(): void {
        this.calculationsSubscription = this.calculationsService.calculationsChanged.subscribe(event => {
            if (event.type === ChangeEventType.Created) {
                this.toastService.show({message: 'Berechnung wurde gespeichert.'});
            }
        });
    }

    // Toast Service is placed into the view of this component, so we need to init it first
    ngAfterViewInit(): void {
        if (!this.secured) {
            this.toastService.show({
                type: ToastType.WARNING,
                header: 'Nicht abgesicherter Modus',
                message: 'Die Anwendung wird ohne Authentifizierung ausgeführt.'
            });
        }
    }

    ngOnDestroy(): void {
        this.calculationsSubscription?.unsubscribe();
    }

    get authenticated(): boolean {
        return this.authService.authenticated;
    }

    get secured(): boolean {
        return this.authService.secured;
    }


}
