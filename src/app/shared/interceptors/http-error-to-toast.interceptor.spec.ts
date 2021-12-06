import { TestBed } from '@angular/core/testing';

import { HttpErrorToToastInterceptor } from './http-error-to-toast.interceptor';

describe('HttpErrorToToastInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrorToToastInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErrorToToastInterceptor = TestBed.inject(HttpErrorToToastInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
