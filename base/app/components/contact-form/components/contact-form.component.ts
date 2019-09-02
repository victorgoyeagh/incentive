import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

    public contactForm = new FormGroup({
        fullname: new FormControl('', [Validators.required]), 
        email: new FormControl('', [Validators.required]), 
        message: new FormControl('', [Validators.required]),
        newsletter: new FormControl('', [])
    });

    constructor() { 
    }

    ngOnInit() {
    }

    sendForm() {
        let formIsValid = this.contactForm.valid;
        if (!formIsValid) {
            for (let i in this.contactForm.controls) {
                this.contactForm.controls[i].markAsTouched();
            }
        } else {
            // send form
        }
    }

    ResetForm() {
        this.contactForm.reset({
            onlySelf: true
        });
    }
}
