export class ScrollHelper { 

    static ApplyHeight(scrollContent: HTMLDivElement, height: number) {
        ['load', 'resize'].forEach((ev) => {
            window.addEventListener(ev, function () { 
                if (scrollContent){
                    scrollContent.style.height = height + 'px';
                }
            })
        });
    }
}