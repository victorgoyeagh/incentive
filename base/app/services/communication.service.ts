import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { IDimensions, ModalFormType, ModalCommand, ModalType, ModalInfo, ModalLocation } from './../entities/modal.entity';

@Injectable()
export class CommunicationService {

    constructor(){

    }

    public sharedModalInfoData: Subject<ModalInfo> = new Subject<ModalInfo>();
    public ShareModalInfoData(value: ModalInfo){
        this.sharedModalInfoData.next(value);
    }

    public sharedModalIsOpenState: Subject<boolean> = new Subject<boolean>();
    public ShareModalIsOpenState(value: boolean){
        this.sharedModalIsOpenState.next(value);
    }

    public sharedModalResponseData: Subject<any> = new Subject<any>();
    public ShareModalResponseData(value: any){
        this.sharedModalResponseData.next(value);
    }

}