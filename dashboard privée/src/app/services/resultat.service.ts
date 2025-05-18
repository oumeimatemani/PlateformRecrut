import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultatTest } from '../models/resultat-test';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResultatService {
  private apiUrl = 'http://localhost:8080/api/resultats';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ResultatTest[]> {
    return this.http.get<ResultatTest[]>(this.apiUrl);
  }

  ajouterResultat(data: any): Observable<ResultatTest> {
    return this.http.post<ResultatTest>(`${this.apiUrl}/ajouter`, data);
  }

  updateResultat(resultat: ResultatTest): Observable<ResultatTest> {
    return this.http.put<ResultatTest>('http://localhost:8080/api/resultats/update', resultat);
  }
  
}
