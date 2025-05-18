import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultatEvaluation } from '../models/resultat-evaluation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private apiUrl = 'http://localhost:8080/api/resultats';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ResultatEvaluation[]> {
    return this.http.get<ResultatEvaluation[]>(this.apiUrl);
  }
}
