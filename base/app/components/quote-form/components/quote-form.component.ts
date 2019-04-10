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

    public quoteForm = this.fb.group({
        firstname: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]), 
        company: new FormControl('', [Validators.required]),
        existingUrl: new FormControl('', [Validators.required]),
        // services: new FormControl('', [Validators.required]),
        services: new FormArray([]),
        projectDesc: new FormControl('', [Validators.required]),
        budget: new FormControl('', [Validators.required]),
        deadline: new FormControl('', [Validators.required]),
        newsletter: new FormControl('', [])
    });

    constructor() { }

    ngOnInit() {
    }

    onChange(value:string, isChecked: boolean) {
        const servicesArray = <FormArray>this.quoteForm.controls.useremail;
      
        if(isChecked) {
            servicesArray.push(new FormControl(value));
        } else {
          let index = servicesArray.controls.findIndex(x => x.value == value)
          servicesArray.removeAt(index);
        }
      }

    sendForm() {
        let formIsValid = this.quoteForm.valid,
            _self = this;

        console.log(this.quoteForm.controls);

        if (!formIsValid) {
            for (let i in this.quoteForm.controls) {
                this.quoteForm.controls[i].markAsTouched();
            }
        } else {

        }
    }

    ResetForm() {
        this.quoteForm.reset({
            onlySelf: true
        });
    }
}