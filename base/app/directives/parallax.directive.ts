import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, AfterViewInit } from "@angular/core";
import { ParallaxDirection } from "./parallax.model";
import { IBackgroundSize } from "./parallax.model.alt";

@Directive({
    selector: '[appParallax]'
})

export class ParallaxDirective implements OnInit, AfterViewInit {
    public bgImage: HTMLDivElement;
    private scrollTopValue: number = 0;
    private ParallaxTopDirection = ParallaxDirection;
    private imagesPath = '/assets/images/default/';

    @Input() parallaxTopDirection: ParallaxDirection;
    @Input() parallaxSpeed: number;
    @Input() initialBgImage: string = undefined;
    @Input() initialBgPosition: string = undefined;
    @Input() initialBgSizeValue: IBackgroundSize = undefined;
    @Input() initialTopPosValue: number = undefined;
    @Input() initialHeightValue: string = undefined;
    @Input() startScrollValue: number = 0;

    constructor(private el: ElementRef) {

        this.bgImage = <HTMLDivElement>this.el.nativeElement;
        this.bgImage.style.transition = 'all 0.1s ease-in 0';
        this.bgImage.style.transitionProperty = 'top, bottom';
        this.getScrollValue();
    }

    ngOnInit() {

        if(this.initialBgPosition){
            this.bgImage.style.backgroundPosition = this.initialBgPosition;
        }

        if (this.initialBgImage) {
            this.bgImage.style.backgroundImage = "url('" + this.initialBgImage + "')";
            this.bgImage.style.backgroundRepeat = 'no-repeat';
        }

        if (this.initialTopPosValue) {
            this.bgImage.style.top = this.initialTopPosValue + 'px';
        }

        if (this.initialHeightValue) {
            this.bgImage.style.minHeight = this.initialHeightValue;
        }

        if (this.initialBgSizeValue) {
            this.bgImage.style.backgroundSize = this.initialBgSizeValue.Width + ' ' + this.initialBgSizeValue.Height;
        }

    }

    ngAfterViewInit() {

    }

    applyParallax(scrollTopValue: number) {

        let negative: string = (this.parallaxTopDirection === ParallaxDirection.Up) ? '-' : '+';
        let val = eval(negative + "((scrollTopValue / this.parallaxSpeed) + ((this.initialTopPosValue) ? parseInt(this.initialTopPosValue.replace('px', '')) : 0)) + 'px'");
        this.bgImage.style.top = val;
    }

    getScrollValue() {
        (<any>window).addEventListener("scroll", (e) => {
            this.scrollTopValue = e.path[1].pageYOffset;
            this.applyParallax(this.scrollTopValue);
            e.stopPropagation();
        });
    }
}

