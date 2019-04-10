import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteFormComponent } from './components/quote-form.component';


@NgModule({
  imports: [
      ReactiveFormsModule,
      FormsModule,
    CommonModule
  ],
  declarations: [QuoteFormComponent],
  exports: [QuoteFormComponent]
})
export class QuoteFormModule { }
