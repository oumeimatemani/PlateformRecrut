import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', { username, password });
  }

  register(username: string, email: string, password: string, phoneNumber: string, role: string[]): Observable<any> {
    return this.http.post(AUTH_API + 'signup', { username, email, password, phoneNumber, role });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(AUTH_API + 'AllUsers');
  }
}
