import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpOptions: any;

  public errors: any = [];

  public refresh: string;
  
  constructor(private http : HttpClient, private router:Router) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

  api_url:''
  public login(user) {
    this.http.post('https://house9000.herokuapp.com/api/token/api/login/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        // this.refresh=data['refresh']
        this.router.navigate(['/home'])
        
      },
      err => {
        this.errors =[err.error.detail]
          }
    );
  }

  // getProduct():Observable<any>{
  //     return this.http.get("https://hood9000.herokuapp.com/api/products/all/")
  // }
  
}
