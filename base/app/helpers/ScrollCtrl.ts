import { WindowHelper } from "./WindowCtrl";

export class ScrollTo {
    private scrollButton: HTMLElement;

    constructor(private elButtonId:string, private scrollToVal:number) {
        let scrollToValue = scrollToVal;
        this.scrollButton = document.getElementById(elButtonId);

        let _self = this;
        this.scrollButton.addEventListener("click", function (ev) {
            _self.ScrollToYPoint(scrollToValue, ev);
        });

        _self.handleButtonVisibility(_self.scrollButton, true);
        _self.handleButtonVisibility(_self.scrollButton, false);
    }

    handleButtonVisibility = (btn, init) => {
        let _self = this;
        window.addEventListener(((init) ? "load" : "scroll"), function () {
            if (this.scrollY < 300) {
                btn.style.visibility = "hidden";
                btn.style.opacity = "0.0";
            } else {
                btn.style.visibility = "visible";
                btn.style.opacity = "1.0";
            }
        });
    }

    ScrollToYPoint(scrollVal, ev) {
        let _self = this,
            scrollPermit = 50,
            scrollSpeed = 10,
            tmpScrollVal = new WindowHelper().ScrollValue();

        if (!(isNaN(scrollVal)) && (ev != null)) {

            let scrollInt = setInterval(function (ev) {
                tmpScrollVal -= scrollPermit;
                if (tmpScrollVal > scrollVal) {
                    window.scrollTo(null, tmpScrollVal);
                } else {
                    window.scrollTo(null, 0);
                    clearInterval(scrollInt);
                }
            }, scrollSpeed);
        }
    }
}
 