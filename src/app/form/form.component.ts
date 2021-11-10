
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomService, MustMatch } from '../services/custom.service';
import { Address } from './address.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [CustomService]
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  stateOptions: string[];
  userAddressInfo: Address;
  isAddMode !: boolean;
 

  constructor(private formBuilder: FormBuilder, private customService: CustomService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email, Validators.minLength(5)]],
      password: [" ",[Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
      confirmpassword: [" ",this.isAddMode ? Validators.required : Validators.nullValidator],
      address: this.formBuilder.group({
        street: [""],
        city: [""],
        state: [""],
        country: [""],
      }),
    }, {
       AbstractControlOptions: { validators: MustMatch('password', 'confirmPassword') },
    });
    this.stateOptions = ["TN", "DL", "MU", "KL"];
    this.userAddressInfo = {
      street: "main street",
      city: "chennai",
      state: "tamilnadu",
      country: "india"
    };
  }

  autoFillAddress() {
    this.registerForm.patchValue({
      username: 'test',
      email: 'test@gmail.com',
      password: 'test',
      confirmpassword: 'new',
      address: {
        street: this.userAddressInfo.street,
        city: this.userAddressInfo.city,
        state: this.userAddressInfo.state,
        country: this.userAddressInfo.country
      }
    });
  }

  clear() {
    this.registerForm.reset();
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
};









