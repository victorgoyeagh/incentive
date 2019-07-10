import { QuoteFormComponent } from './../quote-form/components/quote-form.component';
import { Component, Output, EventEmitter, ViewChild, OnInit, Input, OnChanges, SimpleChanges, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IDimensions, ModalFormType, ModalCommand, ModalType, ModalInfo, ModalLocation } from './../../entities/modal.entity';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IModalReturnValue } from "./../../entities/modal_alt.entity";
import { MiscUtil } from './../../helpers/MiscUtils';
import { ClassHelper } from './../../helpers/ClassUtil';
import { environment } from 'environments/environment.dev';
import { CommunicationService } from 'app/services/communication.service';

@Component({
    selector: 'e-modal',
    templateUrl: './templates/modal.template.html',
    inputs: ['']
})

export class ModalOverlayComponent implements OnInit, OnChanges, AfterViewInit {
    private modalInfoData: ModalInfo;
    private modalValue: any;
    private modalTitle: SafeHtml = "<empty modal title>";
    private modalFormType: ModalFormType;
    public ModalFormType = ModalFormType;
    private modalBody: SafeHtml;
    private modalType: ModalType = ModalType.Alert; //default modal type = alert
    private modalCommand: ModalCommand;
    private modalLocation: ModalLocation;
    private modalResponseObj: IModalReturnValue;
    public modalConfirmText: string;
    public modalCancelText: string;
    public modalShowCloseButton: boolean = true;
    private mType = ModalType;
    private cType = ModalCommand;
    private modalKey: any;
    public ModalDimensions: IDimensions;
    public modalIsOpen: boolean = false;
    public locationClass: string = "";
    private defaultDimentions: IDimensions = { Width: undefined, Height: undefined };
    private formValues: any;
    private uiConfig = environment.uiConfig;


    @Output() closeModalEvent = new EventEmitter<boolean>();

    @Input() multiple: boolean = false;
    @ViewChild('modal') modal: ModalComponent;
    @ViewChild('modal') modalQuery: ElementRef;
    @ViewChild('quoteFormControl') quoteFormControl: QuoteFormComponent;

    constructor(
        private _sanitizer: DomSanitizer,
        private _communicationService: CommunicationService
    ) {
        let _self = this;

        this.defaultDimentions.Width = this.uiConfig.modalDefaultDimensions.Width;
        this.defaultDimentions.Height = this.uiConfig.modalDefaultDimensions.Height;

        this._communicationService.sharedModalInfoData.subscribe((value: ModalInfo) => {
            this.modalInfoData = value;
            this.BuildModal(value);
        });
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    BuildModal(modalInfo: ModalInfo) {

        // console.log(modalInfo);

        //apply content
        this.modalKey = modalInfo.ModalKey;
        this.modalValue = modalInfo.ModalValue;
        this.modalTitle = <SafeHtml>this._sanitizer.bypassSecurityTrustHtml(modalInfo.ModalTitle);
        this.modalBody = <SafeHtml>this._sanitizer.bypassSecurityTrustHtml(modalInfo.ModalBody);
        this.modalType = modalInfo.ModalType;
        this.modalCommand = modalInfo.ModalCommand;
        this.modalCancelText = modalInfo.ModalCancelText;
        this.modalConfirmText = modalInfo.ModalConfirmText;
        this.modalFormType = modalInfo.ModalFormType;
        this.ModalDimensions = (modalInfo.ModalDimensions) ? modalInfo.ModalDimensions : undefined;
        this.modalLocation = (modalInfo.ModalLocation) ? modalInfo.ModalLocation : undefined;
        this.modalShowCloseButton = (modalInfo.ModalShowCloseButton) ? modalInfo.ModalShowCloseButton : undefined;

        //apply behaviour
        switch (modalInfo.ModalCommand) {
            case ModalCommand.Open:
                this.OpenModal();
                break;
            case ModalCommand.Close:
                this.CloseModal(false, null);
                break;
            case ModalCommand.Notify:
                let _self = this;
                _self.OpenModal();
                let tmpInterval = setInterval(function () {
                    _self.CloseModal(false, null);
                    clearInterval(tmpInterval);
                }, 2000);
                break;
            default:
                break;
        }

        //determine height and width of modal 
        if (this.ModalDimensions !== undefined) {
            this.ApplyModalDimensions(this.ModalDimensions.Width, this.ModalDimensions.Height);
        } else {
            this.ApplyModalDimensions(this.defaultDimentions.Width, this.defaultDimentions.Height);
        }

        if (this.modalLocation) {
            this.locationClass = this.modalLocation.toString();
        } else {
            this.locationClass = 'center';
        }

        let modalDialog = <HTMLDivElement>document.querySelector('.modal-dialog');
        let ch = new ClassHelper(modalDialog);
        ch.removeClass('center');
        ch.removeClass('right');
        ch.removeClass('left');
        ch.addClass(this.locationClass);

    }

    /** file management end **/

    CloseModal(response: boolean, ev?: Event) {

        if (!response) {

            //intercept get form values and check if a form and validate 
            let formValues = <FormGroup>this.GetFormValues(this.modalFormType),
                isFormGroup = (formValues instanceof FormGroup);

            /* validate if of form type */
            if (isFormGroup) {
                let formIsValid = formValues.valid;
                if (!formIsValid) {
                    return false;
                } else {
                    this.BroadcastModalResponse(response, formValues);
                    this.modal.close(!response);
                    return true;
                }
            }

        } 

        this.modal.close(response);
    }

    DismissModal(response: boolean, ev: Event) {
        this.modal.close(response);
        //return false;
    }

    OpenModal() {
        this.modal.open();
    }

    GetModalIsOpenState() {
        let _self = this;
        setInterval(function () {
            let backdrop = document.getElementById("backdrop"),
                currValue = ((backdrop.style.display == "inline") || (backdrop.style.display == "block")) ? true : false,
                valueChanged = (_self.modalIsOpen != currValue);

            if (valueChanged) {
                _self.modalIsOpen = currValue;
                _self._communicationService.ShareModalIsOpenState(_self.modalIsOpen);
            }
        }, 500);
    }

    BroadcastModalResponse(response: boolean, formValues: any) {
        this.modalResponseObj = {
            ModalKey: this.modalKey,
            ModalResponse: response,
            ModalValue: this.modalValue,
            ModalFormValue: formValues,
            random: MiscUtil.GetRandomNumber()
        }

        this._communicationService.ShareModalResponseData(this.modalResponseObj);
    }

    GetFormValues(modalFormType: ModalFormType) {
        this.formValues = {};

        switch (modalFormType) {
            case ModalFormType.Default:
                break;
            case ModalFormType.QuoteRequestForm:
                this.quoteFormControl.validateForm();
                this.formValues = this.quoteFormControl.quoteForm;
                break;
            default:
                console.log("No form variables were captured!");
                break;
        }

        return this.formValues;
    }

    ApplyModalDimensions(width: number, height: number) {
        let modalDialog = <HTMLDivElement>document.querySelector('.modal-dialog');
        modalDialog.style.maxWidth = width + "px";
        modalDialog.style.maxHeight = height + "px";
    }

}
