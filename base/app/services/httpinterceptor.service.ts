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
}
