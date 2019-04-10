

export class StyleHelper {

static GetObjectCssDimensions(element) {
        let cn = element.cloneNode();
        let div = document.createElement('div');
        div.appendChild(cn);
        div.style.display = 'none';
        document.body.appendChild(div);
        let cs = window.getComputedStyle
            ? getComputedStyle(cn, null)
            : cn.currentStyle;
        let ret = { width: cs.width, height: cs.height, top: cs.top, right: cs.right, bottom: cs.bottom, left: cs.left };
        document.body.removeChild(div);
        return ret;
    }


}