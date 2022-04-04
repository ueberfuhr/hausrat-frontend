import {TestBed} from '@angular/core/testing';

import {ToastService} from './toast.service';
import {Toast} from '../models/toast';

describe('ToastService', () => {
    let service: ToastService;

    beforeEach(() => {
        // test the injectability of the service
        service = TestBed.inject(ToastService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // times out after 5000ms by default, if not emitted
    it('should emit toasts', (done) => {
        const toast: Toast = {message: 'test message'};
        service.toasts.subscribe(t => {
            expect(t).toBe(toast);
            done();
        });
        service.show(toast);
    });

});
