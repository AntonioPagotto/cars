import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Register from 'src/app/models/user/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  register: Register = {
    username: '',
    password: '',
    email: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user: [''],
      email: [''],
      password: [''],
    })
  }

  registerUser(){
    this.register.username = this.registerForm.get('user').value;
    this.register.password = this.registerForm.get('password').value;
    this.register.email = this.registerForm.get('email').value;
    this.userService.userPost(this.register)
    .subscribe(res => {console.log(res)},err => console.log(err))
  }

}
