import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './Highlight/highlight.directive';
import { NationalCodeDirective } from './nationalCode/national-code.directive';
import { PhoneNumberDirective } from './phoneNumber/phone-number.directive';
import { EmailValidationDirective } from './email/email-validation.directive';
import { PasswordDifficulityDirective } from './password-difficulity/password-difficulity.directive';




@NgModule({
  declarations: [HighlightDirective, NationalCodeDirective, PhoneNumberDirective, EmailValidationDirective, PasswordDifficulityDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    NationalCodeDirective,
    PasswordDifficulityDirective,
    PhoneNumberDirective,
    EmailValidationDirective
    
  ]
})
export class DirectivesModule { }
