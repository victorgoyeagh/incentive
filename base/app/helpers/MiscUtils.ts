import { Validators } from '@angular/forms';

export class MiscUtil {

    static GetRandomNumber() {
        let rand = (Math.floor(Math.random() * 100000000000) + 1);
        return rand;
    }

    static GetRandomNumberBetween(start, end) {
        let rand = (Math.floor(Math.random() * end) + start);
        return rand;
    }
} 