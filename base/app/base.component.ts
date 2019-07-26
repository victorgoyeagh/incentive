import { LoaderService } from './services/loader.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuCtrl } from './helpers/MenuCtrl';
import { ParallaxDirection } from './directives/parallax.model';



@Component({
    selector: 'e-root',
    templateUrl: './base.template.html'
})

export class BaseComponent implements OnInit { 
    public currentYear: string = undefined;
    public ParallaxDirection = ParallaxDirection;
    public MenuCtrl = MenuCtrl;

    constructor(
        private loaderService: LoaderService
    ) {
    }


    @ViewChild('containerBanner') containerBanner: ElementRef;

    ngOnInit() {

        //apply responsive classes of menu
        new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", false);

        //set year
        this.currentYear = (new Date()).getFullYear().toString();
        this.loaderService.myObservable.next(true);

    }
  
    logSelectedDate(event: any) {
        console.log(event)
    }

}


