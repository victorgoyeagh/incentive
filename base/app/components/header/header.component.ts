import { CommunicationService } from 'app/services/communication.service';
import { ModalInfo, ModalCommand, ModalType, ModalFormType, ModalLocation } from './../../entities/modal.entity';
import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { map,startWith,distinctUntilChanged,shareReplay } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('header') header: ElementRef;
    public readonly windowScroll$ = fromEvent(window, 'scroll').pipe(map(x => window.scrollY), startWith(0), distinctUntilChanged(), shareReplay(1));

  constructor(
    private _communicationService: CommunicationService
  ) { }

  ngOnInit() {
  }

ngAfterViewInit() {
    this.windowScroll$.subscribe((value: number) => {
        const header = <HTMLDivElement>this.header.nativeElement;
        if (value > 100) {
            header.classList.add('overlay');
        } else {
            header.classList.remove('overlay');
        }
    })
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
