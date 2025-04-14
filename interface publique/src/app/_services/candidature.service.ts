import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private apiUrl = 'http://localhost:8080/api/candidatures/submit';

  constructor(private http: HttpClient) {}


  postCandidature(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
  
}
