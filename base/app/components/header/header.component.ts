import { CommunicationService } from 'app/services/communication.service';
import { ModalInfo, ModalCommand, ModalType, ModalFormType, ModalLocation } from './../../entities/modal.entity';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @ViewChild('header') header: ElementRef;

  constructor(
    private _communicationService: CommunicationService
  ) { }

  ngOnInit() {
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
        null,
        ModalLocation.Center
    );

    this._communicationService.ShareModalInfoData(modalInfo);

}
}
