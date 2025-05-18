import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OffreEmploi } from '../models/OffreEmploi';

@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {
  private apiUrl = 'http://localhost:8080/api/offres';

  constructor(private http: HttpClient) {}

  getAllOffres(): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(this.apiUrl);
  }


  getOffreById(id: number): Observable<OffreEmploi> {
    return this.http.get<OffreEmploi>(`${this.apiUrl}/${id}`);
  }
  
  createOffre(offre: OffreEmploi): Observable<OffreEmploi> {
    return this.http.post<OffreEmploi>(this.apiUrl, offre);
  }
  
  updateOffre(id: number, offre: OffreEmploi): Observable<OffreEmploi> {
    return this.http.put<OffreEmploi>(`${this.apiUrl}/${id}`, offre);
  }
  
  deleteOffre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getRecommendedOffres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recommended`);
  }
  
}
