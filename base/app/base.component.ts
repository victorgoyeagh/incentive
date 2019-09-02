import { Component, OnInit } from '@angular/core';
import { ParallaxDirection } from 'app/directives/parallax.model';

@Component({
    selector: 'e-root',
    templateUrl: './base.template.html'
})

export class BaseComponent implements OnInit {
    public ParallaxDirection = ParallaxDirection;

    constructor() {
    } 

    ngOnInit() { 
    } 
}


