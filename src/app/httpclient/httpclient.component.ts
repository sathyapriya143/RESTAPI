import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  users: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getusers().subscribe(data => {
      this.users = data;
    }, err => console.log(err),
      () => console.log('api completed'));
  }

  loginUser(signInForm: NgForm) {
    console.log(signInForm.valid);
    const postBody = {
      username: signInForm.value.usernamefield,
      email: signInForm.value.emailAddressfield,
     check: signInForm.value.checkfield,
      notes: signInForm.value.notesfield,
    };
    this.usersService.addUsers(postBody).subscribe(data => {
      this.users=data;
      console.log('added successfully' + data);
    }, (err) => {
      console.log('unable to add user' + err);
    })
  };

  updateUser() {
    this.usersService.updateUser().subscribe(data => {
      console.log('user data updated' + data);
    }, (err) => {
      console.log('unable to update user' + err);
    })
  };

  deleteUser() {
    this.usersService.deleteUser(1).subscribe(data => {
      console.log('user delete Successfully' + data);
    }, (err) => {
      console.log('unable to delete' + err);
    })
  }

}
