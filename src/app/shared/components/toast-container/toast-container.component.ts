import {Component, OnInit} from '@angular/core';
import {Toast, ToastType} from '../../models/toast.model';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent implements OnInit {

  ToastType = ToastType;

  constructor(private readonly service: ToastService) {
  }

  ngOnInit(): void {
    // nothing to initialize
  }

  get toasts(): Toast[] {
    return this.service.toasts;
  }

  remove(toast: Toast): void {
    this.service.remove(toast);
  }
}
