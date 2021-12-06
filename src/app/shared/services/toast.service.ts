import {Injectable} from '@angular/core';
import {Toast} from '../models/toast.model';

@Injectable({providedIn: 'root'})
export class ToastService {
  toasts: Toast[] = [];

  show(toast: Toast): void {
    this.toasts.push(toast);
  }

  remove(toast: Toast): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
