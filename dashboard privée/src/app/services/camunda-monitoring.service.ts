import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamundaMonitoringService {
  private apiUrl = 'http://localhost:8080/engine-rest';

  constructor(private http: HttpClient) {}

  getRunningInstances() {
    return this.http.get(`${this.apiUrl}/process-instance`);
  }

  getHistoricInstances() {
    return this.http.get(`${this.apiUrl}/history/process-instance`);
  }

  getTasksByProcessId(processInstanceId: string) {
    return this.http.get(`${this.apiUrl}/history/task?processInstanceId=${processInstanceId}`);
  }

  getHistoricInstanceById(id: string) {
    return this.http.get(`${this.apiUrl}/camunda/history/process-instance/${id}`);
  }
  
  getVariablesByInstanceId(id: string) {
    return this.http.get(`${this.apiUrl}/history/variable-instance?processInstanceId=${id}`);
  }
  
  
}
