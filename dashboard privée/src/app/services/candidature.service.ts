import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidature } from '../models/candidature';
import { Observable } from 'rxjs';
import { OffreData } from '../models/OffreData';

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
    const payload = {
      candidatureId: data.candidatureId.toString(), 
      decision: data.decision
    };
  
    return this.http.post(`${this.apiUrl}/preselection`, payload, {
      headers: { 'Content-Type': 'application/json' }, 
      responseType: 'text'
    });
  }
  
  getCandidatureById(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(`${this.apiUrl}/${id}`);
  }

  downloadCV(filename: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/cv/${filename}`, {
      responseType: 'blob' 
    });
  }
  
  //entrentien
  getCandidaturesPreselectionnees(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiUrl}/preselectionnees`);
  }

  
  //stat
  getCandidatureStats() {
    return this.http.get<{ total: number, accepted: number, rejected: number }>(`${this.apiUrl}/candidatures-stats`);
  }

  //tri des offres 
  getRecommendedOffers(): Observable<OffreData[]> {
    return this.http.get<OffreData[]>('http://localhost:8080/api/candidatures/offres/recommended');
  }
  

}
