import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastService} from '../services/toast.service';
import {ToastType} from '../models/toast.model';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class HttpErrorToToastInterceptor implements HttpInterceptor {

    constructor(private readonly toastService: ToastService,
                private readonly authService: OAuthService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getAccessToken()}`
            }
        });
        return next
            .handle(request)
            .pipe(
                catchError((response: HttpErrorResponse) => {
                    console.log('Error response:');
                    console.log(response);
                    this.toastService.show({
                        message: response.status > 0
                            ?
                            `Beim Zugriff auf den Server wurde der Fehlercode ${response.status} zurückgegeben. Details: ${response.message}`
                            :
                            'Beim Zugriff auf den Server gibt es einen unbekannten Fehler. Bitte prüfe die Details über die F12-Tools.',
                        type: ToastType.DANGER
                    });
                    return throwError(response);
                })
            );
    }
}
