import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private httpOptions: any;

  public errors: any = [];

  public refresh: string;
  
  constructor(private http : HttpClient, private router:Router) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

  
  public register(user) {
    this.http.post('https://house9000.herokuapp.com/api/token/theregister', JSON.stringify(user),  this.httpOptions).subscribe(
      data => {
        // this.updateData(data['access'],);
        alert('You have registered successfully')
        this.router['/login']
        
      },
      err => {
        this.errors =[err.error.detail]
          }
    );
  }

}
