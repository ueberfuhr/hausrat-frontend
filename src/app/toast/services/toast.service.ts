import {Injectable} from '@angular/core';
import {Toast} from '../models/toast';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ToastService {

    private readonly toastsSubject = new Subject<Toast>();
    public readonly toasts = this.toastsSubject.asObservable();

    public show(toast: Toast): void {
        this.toastsSubject.next(toast);
    }

}
