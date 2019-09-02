import { map, startWith, distinctUntilChanged, shareReplay} from 'rxjs/operators';
import { fromEvent } from "rxjs/observable/fromEvent";

export class MenuCtrl {
    private toggleBtn: HTMLElement;
    private navigation: HTMLElement;
    private header: HTMLElement;
    private main: HTMLElement;
    private dropdown: HTMLElement;    
    public readonly windowScroll$ = fromEvent(window, 'scroll').pipe(map(x => window.scrollY), startWith(0), distinctUntilChanged(), shareReplay(1));

    constructor(btnId: string, navId: string, headerId: string, mainId: string, fixNav: boolean) {
        this.toggleBtn = document.getElementById(btnId);
        this.navigation = document.getElementById(navId);
        this.header = document.getElementById(headerId);
        this.main = document.getElementById(mainId) || null;

        let _self = this;

        this.toggleBtn.addEventListener("click", function (ev) {
            _self.ToggleNavigation(this, _self.navigation, _self.header, _self.main);
        });

        this.ForceNavigationHeight(true);

        if (fixNav) {
            this.ControlNavigationDisplay();
        }

        this.windowScroll$.subscribe((value: number) => { 
            if (value > 100) {
                this.header.classList.add('overlay');
            } else {
                this.header.classList.remove('overlay');
            }
        })
    }

    //apply window height to responsive naviation
    ForceNavigationHeight = (init) => {
        let _self = this;
        window.addEventListener((init) ? "load" : "resize", function () {
            _self.navigation.style.setProperty('height', window.innerHeight + "px", 'important');
        });
    }

    //show/hide nav on tablet/desktop
    ControlNavigationDisplay = () => {
        let currPosition = window.scrollY;
        window.addEventListener("scroll", function () {
            let scrollPos = window.scrollY;
            let _self = this;
            let header = <HTMLElement>document.querySelectorAll(".header")[0];
            let headerStyle = header.style;

            if (scrollPos < currPosition) {
                headerStyle.position = "fixed";
                headerStyle.top = "0px";
            } else {
                headerStyle.top = "-80px";
            }
            currPosition = scrollPos;
        });
    }

    //toggle navigation on responsive
    ToggleNavigation = (btn, nav, header, main) => {

        if ((!nav.style.left) || (nav.style.left == "100%")) {
            nav.style.left = "20%";
            header.style.left = "-80%";
            main.style.left = "-80%";
            main.style.position = "absolute";

            (<HTMLDivElement>header).classList.add('open');
            (<HTMLDivElement>main).classList.add('open'); 
        } else {
            nav.style.left = "100%";
            header.style.left = "0%";
            main.style.left = "0%";
            main.style.position = "relative";

            (<HTMLDivElement>header).classList.remove('open');
            (<HTMLDivElement>main).classList.remove('open'); 
        }

        return false;
    }
}
