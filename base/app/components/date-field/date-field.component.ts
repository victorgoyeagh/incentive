import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { invalidDateValidator, DateValidators } from 'app/validators/date-validators';


@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent implements OnInit {

    public dateForm = new FormGroup({
        day: new FormControl('3', [Validators.minLength(2), Validators.required, Validators.min(1), Validators.max(31)]),
        month: new FormControl('6', [Validators.minLength(2), Validators.required, Validators.min(1), Validators.max(12)]),
        year: new FormControl('2019', [Validators.minLength(4), Validators.required, invalidDateValidator ])
    }
    );

    constructor() { }

    ngOnInit() {
    }

    submitForm() {
        const dayVal = parseInt(this.dateForm.controls.day.value);
        const monthVal = parseInt(this.dateForm.controls.month.value);
        const yearVal = parseInt(this.dateForm.controls.year.value);

        if (!this.dateForm.valid) {

            for (let i in this.dateForm.controls) {
                this.dateForm.controls[i].markAsTouched();
            }
        } else {
            console.log(this.dateForm.valid);
        }
    }

}
