import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

	public loginUser: any;

  constructor(private _RegisterService: LoginService ){}


  ngOnInit(): void {
    this.loginUser = {
      username: '',
      password: ''
    }
    this._RegisterService.errors=[]
  }

  login() {
    this._RegisterService.login({'username': this.loginUser.username,'email': this.loginUser.email,
    'type': this.loginUser.type, 'password': this.loginUser.password});
   }


}
