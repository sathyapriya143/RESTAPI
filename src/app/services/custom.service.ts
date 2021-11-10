import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  MustMatch(arg0: string, arg1: string): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  // passwordMatchValidator(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     const passwordControl = formGroup.controls[password];
  //     const confirmPasswordControl = formGroup.controls[confirmPassword];
  //     if (!passwordControl || !confirmPassword) {
  //       return null;
  //     }
  //     if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
  //       return null;
  //     }
  //     if (passwordControl.value !== confirmPasswordControl.value) {
  //       confirmPasswordControl.setErrors({ passwordMismatch: true });
  //     }
  //     else {
  //       confirmPasswordControl.setErrors(null);
  //     }
  //   };
  // }
}


// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const formGroup = <FormGroup>group;
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }

        return null;
    }
}




