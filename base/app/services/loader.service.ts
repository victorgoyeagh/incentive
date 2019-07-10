import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class LoaderService {

    public myObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {
    }

}
