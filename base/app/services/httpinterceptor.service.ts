import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEventType, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const changedReq = req.clone({ headers: req.headers.set('My-Header', 'MyHeaderValue') });
        return next.handle(changedReq);
    }
    
    /*intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log(request);
        const token: string = localStorage.getItem('token');
    
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
    
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
    
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    
        return next.handle(request)
        /*.pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }));
    }*/

}
