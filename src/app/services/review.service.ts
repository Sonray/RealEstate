import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = '';
  constructor(private http:HttpClient) { }

  get user(){

    return this.http.get(this.url);
  }
}
