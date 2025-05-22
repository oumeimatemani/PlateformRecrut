import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(AUTH_API + 'signin', credentials);
  }
  

  register(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', data);
  }
  


  getAllUsers(): Observable<any> {
    return this.http.get(AUTH_API + 'AllUsers');
  }
}
