import { LoaderService } from './services/loader.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { MenuCtrl } from './helpers/MenuCtrl';
import { ModalInfo, ModalCommand, ModalType, ModalFormType, ModalLocation } from './entities/modal.entity';
import { CommunicationService } from './services/communication.service';
import { ParallaxDirection } from './directives/parallax.model';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs/observable/fromEvent';



@Component({
    selector: 'e-root',
    templateUrl: './base.template.html'
})

export class BaseComponent implements OnInit, AfterViewInit, AfterViewChecked { 
    public currentYear: string = undefined;
    public ParallaxDirection = ParallaxDirection;
    public MenuCtrl = MenuCtrl;

    constructor( private loaderService: LoaderService,
        private _http: HttpClient,
        private _communicationService: CommunicationService
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

    ngAfterViewInit() {

    }
    ngAfterViewChecked() {
    }

    requestQuoteForm() {

        let modalInfo: ModalInfo = new ModalInfo(
            `Request quote`,
            ``,
            ModalCommand.Open,
            ModalType.Alert,
            "OK",
            "",
            null,
            ModalFormType.QuoteRequestForm,
            "bookmarkModal",
            {
                Width: '100%',
                Height: '100%'
            },
            ModalLocation.Center
        );

        this._communicationService.ShareModalInfoData(modalInfo);

    }

    logSelectedDate(event: any) {
        console.log(event)
    }

}


