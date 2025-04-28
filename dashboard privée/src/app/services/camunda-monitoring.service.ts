import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessInstance } from '../models/process-instance';

@Injectable({
  providedIn: 'root'
})
export class CamundaMonitoringService {
  private apiUrl = 'http://localhost:8080/engine-rest';

  constructor(private http: HttpClient) {}

  getRunningInstances() {
    return this.http.get(`${this.apiUrl}/process-instance`);
  }



  getTasksByProcessId(processInstanceId: string) {
    return this.http.get(`${this.apiUrl}/history/task?processInstanceId=${processInstanceId}`);
  }

 // getHistoricInstanceById(id: string) {
 //   return this.http.get(`${this.apiUrl}/camunda/history/process-instance/${id}`);
 // }
  
  getVariablesByInstanceId(id: string) {
    return this.http.get(`${this.apiUrl}/history/variable-instance?processInstanceId=${id}`);
  }
  
  
  //getBpmnXml(definitionId: string) {
   // return this.http.get<any>(`/engine-rest/process-definition/${definitionId}/xml`);
  //}

  

  getHistoricInstanceById(id: string): Observable<ProcessInstance> {
    return this.http.get<ProcessInstance>(
      `http://localhost:8080/engine-rest/history/process-instance/${id}`
    );
  }

  getBpmnXml(definitionId: string): Observable<any> {
    return this.http.get(
      `http://localhost:8080/engine-rest/process-definition/${definitionId}/xml`
    );
  }

  getHistoricInstances(): Observable<ProcessInstance[]> {
    return this.http.get<ProcessInstance[]>(`${this.apiUrl}/history/process-instance`);
  }
  
  getDefinitionByKey(key: string) {
    return this.http.get(`${this.apiUrl}/process-definition/key/${key}`);
  }
  
  
}
