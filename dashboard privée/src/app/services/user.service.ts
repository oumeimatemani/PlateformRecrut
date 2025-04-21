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
  

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/deleteUser/${id}`, { responseType: 'text' });
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
  
  
  
}
