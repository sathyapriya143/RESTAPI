import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loginUser(signInForm:NgForm){
  console.log(signInForm)
  console.log(signInForm.value.usernamefield)
  console.log(signInForm.value.emailAddressfield)
  console.log(signInForm.value.passwordfield)
  console.log(signInForm.value.checkfield)
  console.log(signInForm.value.gender1field)
 console.log(signInForm.value.gender2field)
  console.log(signInForm.value.notesfield)
}
}
