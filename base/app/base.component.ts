import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuCtrl } from './helpers/MenuCtrl';
import { ModalInfo, ModalCommand, ModalType, ModalFormType, ModalLocation } from './entities/modal.entity';
import { CommunicationService } from './services/communication.service';
import { ParallaxDirection } from './directives/parallax.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/Observer';
import * as moment_ from 'moment';



@Component({
    selector: 'e-root',
    templateUrl: './base.template.html'
})

export class BaseComponent implements OnInit { 
    public currentYear: string = undefined;
    public ParallaxDirection = ParallaxDirection;
    private apiNotesPath = 'http://localhost:3000/notes';
    private apiCommentsPath = 'http://localhost:3000/comments';
    private apiUsersPath = 'http://localhost:3000/users';

    constructor(
        private _http: HttpClient,
        private _communicationService: CommunicationService
    ) {
    }

    ngOnInit() {

        //apply responsive classes of menu
        new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", false);

        //set year
        this.currentYear = (new Date()).getFullYear().toString();


        let obs_1 = this._http.get(this.apiUsersPath);
        let obs_2 = this._http.get(this.apiNotesPath);
        let obs_3 = this._http.get(this.apiCommentsPath);

        obs_1.switchMap(
            (obs1data) => {
                console.log(obs1data);
                return obs_2.switchMap(
                    (obs2Data) => {
                        console.log(obs2Data);
                        return of(empty);
                    })
            }
        ).subscribe((result) => {
            console.log(result);
        });

    }

    requestQuoteForm() {

        let modalInfo: ModalInfo = new ModalInfo(
            `<h3>Request quote</h3>`,
            ``,
            ModalCommand.Open,
            ModalType.Alert,
            "OK",
            "",
            null,
            ModalFormType.QuoteRequestForm,
            "bookmarkModal",
            null,
            ModalLocation.Center
        );

        this._communicationService.ShareModalInfoData(modalInfo);

    }

    logSelectedDate(event: any) {
        console.log((<moment_.Moment>event.mDate).toDate())
    }

}


