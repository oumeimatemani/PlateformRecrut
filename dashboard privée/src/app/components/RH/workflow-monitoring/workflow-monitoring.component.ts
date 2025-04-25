import { Component, OnInit } from '@angular/core';
import { CamundaMonitoringService } from '../../../services/camunda-monitoring.service';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workflow-monitoring',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, DatePipe,FormsModule ,RouterModule],
  templateUrl: './workflow-monitoring.component.html',
  styleUrl: './workflow-monitoring.component.css'
})
export class WorkflowMonitoringComponent implements OnInit {
  processInstances: any[] = [];
  filteredInstances: any[] = [];
  filterEtat: string = 'ALL';

  currentPage = 1;
  itemsPerPage = 6;
  paginatedInstances: any[] = [];

  constructor(private camundaService: CamundaMonitoringService) {}

  ngOnInit(): void {
    this.camundaService.getHistoricInstances().subscribe((instances: any) => {
      instances.forEach((instance: any) => {
        this.camundaService.getVariablesByInstanceId(instance.id).subscribe((vars: any) => {
          const destinationVar = vars.find((v: any) => v.name === 'destinationId');
          instance.candidatureId = destinationVar ? Number(destinationVar.value) : null;
        });
      });
  
      this.processInstances = instances;
      this.applyFilter(); // filtre
      this.updatePaginatedInstances(); // pagination 

    });
  }
  



applyFilter() {
  if (this.filterEtat === 'ALL') {
    this.filteredInstances = this.processInstances;
  } else if (this.filterEtat === 'ONGOING') {
    this.filteredInstances = this.processInstances.filter(i => !i.endTime);
  } else if (this.filterEtat === 'FINISHED') {
    this.filteredInstances = this.processInstances.filter(i => i.endTime);
  }
  this.currentPage = 1;
  this.updatePaginatedInstances();
}

updatePaginatedInstances() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  this.paginatedInstances = this.filteredInstances.slice(start, end);
}

get totalPages(): number {
  return Math.ceil(this.filteredInstances.length / this.itemsPerPage);
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updatePaginatedInstances();
  }
}

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePaginatedInstances();
  }
}

goToPage(page: number) {
  this.currentPage = page;
  this.updatePaginatedInstances();
}



}