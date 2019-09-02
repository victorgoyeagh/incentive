import { Component } from '@angular/core';
import { MenuCtrl } from './../helpers/MenuCtrl';
import { ParallaxDirection } from 'app/directives/parallax.model';

@Component({
    selector: 'e-main',
    templateUrl: './templates/main.template.html'
})

export class MainTemplate { 
    public currentYear: string = undefined;
    public ParallaxDirection = ParallaxDirection;
    public MenuCtrl = MenuCtrl;
    
    constructor() { }

    ngOnInit() {
        new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", false);
        this.currentYear = (new Date()).getFullYear().toString();
    }
 
}