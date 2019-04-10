import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

    public contactForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
        newsletter: new FormControl('', [])
    });

    constructor() { }

    ngOnInit() {
    }

    sendForm() {
        let formIsValid = this.contactForm.valid,
            _self = this;

        if (!formIsValid) {
            for (let i in this.contactForm.controls) {
                this.contactForm.controls[i].markAsTouched();
            }
        } else {

        }
    }

    ResetForm() {
        this.contactForm.reset({
            onlySelf: true
        });
    }
}
