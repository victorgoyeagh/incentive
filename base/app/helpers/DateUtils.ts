

export class DateUtils {

    constructor() {
    }

    static DateFieldValidator(control) {
        let e: boolean;

        if (DateUtils.IsValidDate(control.value)) {
            return null;
        } else {
            return { 'invalidDateField': true };
        }
    }

    static IsValidDate(date) {
        if (Object.prototype.toString.call(date) === "[object Date]") { 
            if (isNaN(date.getTime())) {
                return false;
            }
            else {
                return true;
            }
        }
    }

}