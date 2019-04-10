import { ClassHelper } from './ClassUtil';
import { Subject } from 'rxjs/Subject';

export class MapLoaderUtil {
    private loading: number = 0;
    private loaded: number = 0; 
    private classHelper: ClassHelper;
    private loaderObj: HTMLElement;
    private innerLoaderObj: HTMLElement;
    public alertMapLoaded: Subject<boolean> = new Subject<boolean>();

    constructor(_loader) {
        if (_loader) {
            this.loaderObj = _loader;
            this.innerLoaderObj = <HTMLElement>this.loaderObj.children[0];
            this.classHelper = new ClassHelper(this.loaderObj); 
        }
    }

    AddLoading() {
        if (this.loading === 0) {
            this.classHelper.toggleClass("show");
        }
        ++this.loading;
        this.Update();
    }

    AddLoaded() {
        let _self = this;
        setTimeout(function () {
            ++_self.loaded;
            _self.Update();
        }, 100); 
    }

    Update() {
        //if attached to a loader 
        let width = (this.loaded / this.loading * 100).toFixed(1) + '%';
        this.innerLoaderObj.style.width = width;
 
        //console.log(width);

        if (this.loading === this.loaded) {
            this.loading = 0;
            this.loaded = 0;
            let _self = this;
            setTimeout(function () {
                _self.classHelper.toggleClass("show");
                console.log("source loaded");
                _self.alertMapLoaded.next(true);
            }, 500);
        }
    }
}