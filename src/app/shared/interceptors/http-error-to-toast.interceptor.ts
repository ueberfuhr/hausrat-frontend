import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ToastService} from '../services/toast.service';
import {ToastType} from '../models/toast.model';

@Injectable()
export class HttpErrorToToastInterceptor implements HttpInterceptor {

    constructor(private readonly toastService: ToastService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next
            .handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    const response = event as HttpResponseBase;
                    console.log('<-Interceptor');
                    console.log(response);
                    return event;
                })
            )
            .pipe(
                catchError((response: HttpErrorResponse) => {
                    console.log(response);
                    this.toastService.show({
                        message: `Beim Zugriff auf Daten von Backend wurde Fehlercode ${response.status} zurückgegeben.`,
                        type: ToastType.DANGER
                    });
                    return throwError(response);
                })
            );
    }
}
