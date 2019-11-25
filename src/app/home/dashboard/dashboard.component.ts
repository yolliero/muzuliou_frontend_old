import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../welcome/services/auth.service';

@Component({
  selector: 'muz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
private user;
private unsernameTemp;
  constructor(private autService: AuthService) { }

  ngOnInit() {

    this.user = this.autService.getUser();
    this.unsernameTemp 
    if (this.user){
      this.unsernameTemp = this.user.username;
    } else{
      this.unsernameTemp = 'inconnu';
    }
  
  }

}
