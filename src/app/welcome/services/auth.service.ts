import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { logging } from 'protractor';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLog: string | null = null;
  private token: string | null = null;
  private loginState = false;

  constructor(private httpService: HttpService,
              private route: Router) { }


  login(data) {
    console.log('welcomeservice', data);
    return this.httpService.post(data).subscribe(
          res => {
            console.log('welcomeservie', res);
            this.route.navigate(['/home/dashboard']);
            this.token = res.token;
            this.userLog = res;
            this.loginState= true;

            return res;
          });
  }

  getUser(){
    return this.userLog;
  }

  getToken(){
    return this.token;
  }

  isLogged() {
    return this.loginState;
  }

}
