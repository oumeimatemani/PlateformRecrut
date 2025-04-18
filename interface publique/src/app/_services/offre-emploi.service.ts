import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { OffreEmploi } from '../models/offre-emploi.model';

@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {
  private apiUrl = 'http://localhost:8080/api/offres';

  constructor(private http: HttpClient) {}

  getAllOffres(): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(this.apiUrl);
  }


  filtrerOffres(filtre: any): Observable<OffreEmploi[]> {
    let params = new HttpParams();

    if (filtre.titre) params = params.set('titre', filtre.titre);
    if (filtre.ville) params = params.set('ville', filtre.ville);
    if (filtre.competence) params = params.set('competence', filtre.competence);

    const typeContrat = Object.entries(filtre.contrats).find(([_, v]) => v)?.[0];
    if (typeContrat) params = params.set('typeContrat', typeContrat);

    return this.http.get<OffreEmploi[]>(`${this.apiUrl}/filtrer`, { params });
  }
  
}
