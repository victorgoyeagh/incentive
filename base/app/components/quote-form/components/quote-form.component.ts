import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ICheckboxItem } from '../models/quote.models';


@Component({
    selector: 'app-quote-form',
    templateUrl: './quote-form.component.html',
    styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {
    public fb: FormBuilder = new FormBuilder();
    private telRegex = new RegExp(/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/);
    private emailRegex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    private nameRegex = new RegExp(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/);
    private urlRegex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/);

    public quoteForm = this.fb.group({
        firstname: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
        surname: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
        email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
        phone: new FormControl('', [Validators.required, Validators.pattern(this.telRegex)]),
        company: new FormControl('', [Validators.required, Validators.pattern(this.telRegex)]),
        existingUrl: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)]),
        services: new FormControl([], null),
        projectDesc: new FormControl('', [Validators.required]),
        budget: new FormControl('', [Validators.required]),
        deadline: new FormControl('', [Validators.required]),
        newsletter: new FormControl('', [])
    }, {
            validators: [this.servicesRequiredValidation]
        }
    );

    constructor() { }

    ngOnInit() {
    }

    servicesRequiredValidation(form: FormGroup) {
        const servicesVal = <Array<string>>form.get('services').value;
        return { 'servicesRequired': false };
        //console.log(servicesVal, servicesVal.length);
        // return { 'servicesRequired':  (servicesVal.length) ? true : false };
    }

    updateCheckboxes(value: any, event: Event) {
        const isChecked = event.target['checked'];
        const servicesArray = <Array<string>>this.quoteForm.controls.services.value;

        if (isChecked) {
            servicesArray.push(value);
        } else {
            const valueIndex = servicesArray.indexOf(value);
            servicesArray.splice(valueIndex, 1);
        }
    }

    onChange(value: string, isChecked: boolean) {
        const servicesArray = <FormArray>this.quoteForm.controls.useremail;

        if (isChecked) {
            servicesArray.push(new FormControl(value));
        } else {
            let index = servicesArray.controls.findIndex(x => x.value == value)
            servicesArray.removeAt(index);
        }
    }

    validateForm() {
        const formIsValid = this.quoteForm.valid;
        if (!formIsValid) {
            for (const i in this.quoteForm.controls) {
                this.quoteForm.controls[i].markAsTouched();
            }
        }
    }

    ResetForm() {
        this.quoteForm.reset({
            onlySelf: true
        });
    }
}