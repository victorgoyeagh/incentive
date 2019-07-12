import { setTimeout } from 'timers';
import { OnInit } from '@angular/core';
import { ClassHelper } from './ClassUtil';
import { StyleHelper } from './StyleHelper';


export class PanelCtrl {
    public panel: HTMLDivElement;
    public scrollContent: HTMLDivElement;
    public closeBtn: HTMLAnchorElement;
    public minimiseBtn: HTMLAnchorElement;
    public classHelper: ClassHelper;
    public openClass: string;
    public closeClass: string;
    public innerDiv: HTMLDivElement;
    public isOpen: boolean = false;
    public isFullyOpen: boolean = false;

    constructor(panel: HTMLDivElement) {
        let _self = this;
        this.openClass = "open";

        _self.panel = panel;

        _self.SetPanelHeight();
        this.classHelper = new ClassHelper(this.panel);
    }

    SetPanelHeight() {
        let currPanelTop = 128,
            _self = this;
        ['load', 'resize'].forEach(function (ev, index) {
            window.addEventListener(ev, function () {
                let wHeight = window.innerHeight;
                _self.panel.setAttribute("style", "height:" + (wHeight - currPanelTop) + "px");
            });
        });
    }

    TogglePanelFull() {
        let _self = this;
        this.classHelper.toggleClass("full");

        if (this.classHelper.containsClass("full")){
            this.isFullyOpen = true;
        } else {
            this.isFullyOpen = false;
        }

        let pwInterval = setInterval(function () {
            let percWidth = _self.panel.style.width;
            let toWidth = StyleHelper.GetObjectCssDimensions(_self.panel).width;
            let dynPanelWidth = Math.ceil((_self.panel.clientWidth / window.outerWidth) * 100);

            if (dynPanelWidth == parseInt(toWidth)) {
                clearInterval(pwInterval);
            } else {
                //console.log(dynPanelWidth, parseInt(toWidth));
                //check if reducing or expanding
            }

        }, 10);
    }

    OpenPanel() {
        this.classHelper.addClass(this.openClass);
        this.UpdateOpenState();
    }

    ClosePanel() {
        this.classHelper.removeClass(this.openClass);
        this.UpdateOpenState();
    }

    TogglePanel() {
        this.classHelper.toggleClass(this.openClass);
        this.UpdateOpenState();
    }

    UpdateOpenState(){
        if (this.classHelper.containsClass(this.openClass)) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

}
