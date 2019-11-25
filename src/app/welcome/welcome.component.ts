import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'muz-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private  authService: AuthService) { }

  ngOnInit() {

  }

  login() {
    console.warn(this.loginForm.value);
    this.authService.login(this.loginForm.value);

  }


}

