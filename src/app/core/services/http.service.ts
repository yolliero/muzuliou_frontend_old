import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post( data): Observable<any> {
    console.log('http', data);
    return  this.http.post(
      'http://localhost:8080/authenticate',
      data);

  }
}
