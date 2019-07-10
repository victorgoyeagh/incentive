import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { LoaderService } from 'app/services/loader.service';


@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewChecked {

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {

        this.loaderService.myObservable.subscribe((value: Boolean) => {
            console.log(value);
        });
    }

    ngAfterViewChecked() {

    }

}
