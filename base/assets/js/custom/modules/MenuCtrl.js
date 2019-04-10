import { classHelper as ClassHelper } from "./helperFunctions";
import { windowHelper as WindowHelper } from "./helperFunctions";

export class MenuCtrl {
    constructor(btnId, navId, headerId, mainId, fixNav, scrollPane) { // pass in id or object
        this.toggleBtn = document.getElementById(btnId);
        this.navigation = document.getElementById(navId);
        this.header = document.getElementById(headerId);
        this.main = document.getElementById(mainId) || null;

        let _self = this;

        _self.toggleBtn.addEventListener("click", function (ev) {
            _self.ToggleNavigation(this, _self.navigation, _self.header, _self.main);
        });

        _self.ForceNavigationHeight(true);
        _self.ForceNavigationHeight(false);

        if (fixNav) {
            this.ControlNavigationDisplay();
        }
    }

    //apply window height to responsive naviation
    ForceNavigationHeight = (init) => {
        let _self = this;
        window.addEventListener((init) ? "load" : "resize", function (ev) {
            _self.navigation.style.height = window.innerHeight + "px";
        });
    }

    //show/hide nav on tablet/desktop
    ControlNavigationDisplay = () => {
        let currPosition = window.scrollY;
        window.addEventListener("scroll", function () {
            let scrollPos = window.scrollY;
            let _self = this;
            let header = document.querySelectorAll(".header")[0];
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
        let wd = new WindowHelper();

        if ((!navLeft) || (navLeft == "100%")) {
            nav.style.left = "20%";
            header.style.left = "-80%";
            ms.left = "-80%";
            ms.position = "absolute";
            chHeader.addClass("open");
            chMain.addClass("open");
            wd.disableScroll();
        } else {
            nav.style.left = "100%";
            header.style.left = "0%";
            ms.left = "0%";
            ms.position = "relative";
            chHeader.removeClass("open");
            chMain.removeClass("open");
            wd.enableScroll();
        }

        return false;
    }
}

module.exports = {
    menuCtrl: MenuCtrl
}