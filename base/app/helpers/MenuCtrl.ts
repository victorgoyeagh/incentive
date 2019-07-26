import { map, startWith, distinctUntilChanged, shareReplay} from 'rxjs/operators';
import { ClassHelper } from "./ClassUtil";
import { fromEvent } from "rxjs/observable/fromEvent";

//import { WindowHelper } from "./WindowCtrl";

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
       // this.ForceNavigationHeight(false);

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
        window.addEventListener((init) ? "load" : "resize", function (ev) {
           // _self.navigation.style.height = window.innerHeight + "px";
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
            let ns = new ClassHelper(header);

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
        let navLeft = nav.style.left;
        let ms = main.style;
        let chHeader = new ClassHelper(header);
        let chMain = new ClassHelper(main);
        //let wd = new WindowHelper();

        if ((!navLeft) || (navLeft == "100%")) {
            nav.style.left = "20%";
            header.style.left = "-80%";
            ms.left = "-80%";
            ms.position = "absolute";
            chHeader.addClass("open");
            chMain.addClass("open");
            // wd.disableScroll();
        } else {
            nav.style.left = "100%";
            header.style.left = "0%";
            ms.left = "0%";
            ms.position = "relative";
            chHeader.removeClass("open");
            chMain.removeClass("open");
            // wd.enableScroll();
        }

        return false;
    }
}
