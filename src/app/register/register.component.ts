import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';
import { Meed } from '../meed'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public registerUser: any;

  constructor(private _RegisterService: RegisterService ){}

  ngOnInit(): void {
    this.registerUser = {
      username: '',
      email: '',
      type: '',
      password: ''
    }
    this._RegisterService.errors=[]
  }

  login() {
    this._RegisterService.register({'username': this.registerUser.username,'email': this.registerUser.email,
    'type': this.registerUser.type, 'password': this.registerUser.password});
  }

}
