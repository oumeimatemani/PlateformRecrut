import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptorFn = (req: HttpRequest<any>, next: (req: HttpRequest<any>) => Observable<HttpEvent<any>>): Observable<HttpEvent<any>> => {
    const token = localStorage.getItem('token');

    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    return next(req);
};
