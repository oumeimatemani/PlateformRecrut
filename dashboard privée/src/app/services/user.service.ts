import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';



@Injectable({ providedIn: 'root' })
export class UserService {

  private apiUrl = 'http://localhost:8080/api/auth';


  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  getAllUsers(): Observable<any[]> {
    const token = this.tokenStorage.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/AllUsers`, { headers });
  }
  
  getUser(id: number): Observable<any> {
    const token = this.tokenStorage.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/getUser/${id}`, { headers });
  }
  

  updateUser(id: number, userData: any): Observable<any> {
    const token = this.tokenStorage.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/updateUser/${id}`, userData, { headers });
  }
  
  updateRole(id: number, newRole: string): Observable<any> {
    const token = this.tokenStorage.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = new URLSearchParams();
    body.set('newRole', newRole);
    return this.http.put(`${this.apiUrl}/updateRole/${id}`, body.toString(), {
      headers: headers.set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    });
  }
  
  deleteUser(id: number): Observable<any> {
    const token = this.tokenStorage.getToken();
    console.log('Token utilisé pour suppression :', token); // <-- LOG
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/deleteUser/${id}`, { headers, responseType: 'text' });
  }
  
  
}
