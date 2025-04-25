import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaMonitoringService } from '../../../../services/camunda-monitoring.service';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-processus-details',
  standalone: true,
  imports: [CommonModule, NgIf, DatePipe,RouterModule],
  templateUrl: './processus-details.component.html',
  styleUrl: './processus-details.component.css'
})
export class ProcessusDetailsComponent implements OnInit {
  processInstance: any;

  constructor(
    private route: ActivatedRoute,
    private camundaService: CamundaMonitoringService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.camundaService.getHistoricInstanceById(id).subscribe(data => {
        this.processInstance = data;
      });
    });
  }
  
}
