import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8080/api/dashboard'; 

  constructor(private http: HttpClient) {}

  getTotalOffers() {
    return this.http.get<number>(`${this.apiUrl}/offers`);
  }

  getTotalCandidatures() {
    return this.http.get<number>(`${this.apiUrl}/candidatures`);
  }

  getTotalUsers() {
    return this.http.get<number>(`${this.apiUrl}/users`);
  }

  getProcessStats(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/dashboard/process-status');
  }
  
}