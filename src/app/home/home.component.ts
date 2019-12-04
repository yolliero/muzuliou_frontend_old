import { Component, OnInit } from '@angular/core';
import { AuthService } from '../welcome/services/auth.service';

@Component({
  selector: 'muz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

