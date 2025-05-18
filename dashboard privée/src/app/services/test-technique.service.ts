import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestTechnique } from '../models/TestTechnique';

@Injectable({
  providedIn: 'root'
})
export class TestTechniqueService {
  private apiUrl = 'http://localhost:8080/api/tests';

  constructor(private http: HttpClient) {}

  getAllTests(): Observable<TestTechnique[]> {
    return this.http.get<TestTechnique[]>(this.apiUrl);
  }

  create(test: TestTechnique): Observable<TestTechnique> {
    return this.http.post<TestTechnique>(this.apiUrl, test);
  }

  update(id: number, test: TestTechnique): Observable<TestTechnique> {
    return this.http.put<TestTechnique>(`${this.apiUrl}/${id}`, test);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getById(id: number): Observable<TestTechnique> {
    return this.http.get<TestTechnique>(`${this.apiUrl}/${id}`);
  }
}
