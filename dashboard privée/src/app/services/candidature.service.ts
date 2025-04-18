import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidature } from '../models/candidature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private apiUrl = 'http://localhost:8080/api/candidatures';

  constructor(private http: HttpClient) { }


  

  getAllCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiUrl}/AllCandidatures`);
  }
  
  
  deleteCandidature(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
  
  completePreselectionTask(data: { candidatureId: number, decision: string }) {
    return this.http.post(`${this.apiUrl}/preselection`, data , { responseType: 'text' });
  }
  
  getCandidatureById(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(`${this.apiUrl}/${id}`);
  }

  downloadCV(filename: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/cv/${filename}`, {
      responseType: 'blob' 
    });
  }
  
  

}
