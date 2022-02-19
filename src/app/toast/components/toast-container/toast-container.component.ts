import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastService} from '../../services/toast.service';
import {Toast} from '../../models/toast';
import {ToastType} from '../../models/toast-type';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-toast-container',
    templateUrl: './toast-container.component.html',
    styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent implements OnInit, OnDestroy {

    private visibleToasts: Toast[] = [];
    private toastSubscription?: Subscription;
    ToastType = ToastType;

    constructor(private readonly service: ToastService) {
    }

    ngOnInit(): void {
        this.toastSubscription = this.service.toasts.subscribe(toast => this.visibleToasts.push(toast));
    }

    ngOnDestroy(): void {
        this.toastSubscription?.unsubscribe();
    }

    get toasts(): Toast[] {
        return this.visibleToasts;
    }

    remove(toast: Toast): void {
        this.visibleToasts = this.visibleToasts.filter(t => t !== toast);
    }
}
