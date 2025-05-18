import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class EntretienService {
  private apiUrl = 'http://localhost:8080/api/entretiens';

  constructor(private http: HttpClient) {}

  planifierEntretien(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/planifier`, data);
  }
}
