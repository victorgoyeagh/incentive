import { Component } from '@angular/core';
import { ModalInfo, ModalCommand, ModalType, ModalFormType, ModalLocation } from './../entities/modal.entity';
import { CommunicationService } from './../services/communication.service';

@Component({
    selector: 'home',
    templateUrl: './templates/home.template.html'
})

export class HomeComponent { 

    constructor(
        private _communicationService: CommunicationService
    ) {

    }

    
    LaunchDefaultModal(event: Event) {  

        let modalInfo: ModalInfo = new ModalInfo(
            `<h3>Switch Layers</h3>`,
            `<h4>Please select a base layer map or overlay</h4>`,
            ModalCommand.Open,
            ModalType.Alert,
            "Done",
            "",
            null,
            ModalFormType.Default,
            "defaultModal",
            undefined,
            ModalLocation.Center
        );

        this._communicationService.ShareModalInfoData(modalInfo);
    }
}