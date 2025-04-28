import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaMonitoringService } from '../../../../services/camunda-monitoring.service';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProcessInstance } from '../../../../models/process-instance';
import BpmnViewer from 'bpmn-js';
import { ChartConfiguration, ChartType } from 'chart.js';
import Chart from 'chart.js/auto'; 
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-processus-details',
  standalone: true,
  imports: [CommonModule, NgIf, DatePipe, RouterModule],
  templateUrl: './processus-details.component.html',
  styleUrl: './processus-details.component.css'
})
export class ProcessusDetailsComponent implements OnInit, AfterViewInit {
  processInstance!: ProcessInstance;
  private processDefinitionId: string | null = null;
  etatChartInstance: any = null;
  etatStats = { ongoing: 0, finished: 0 };

  private isDataReady = false; 
  hasDiagram: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private camundaService: CamundaMonitoringService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.camundaService.getHistoricInstanceById(id).subscribe((data: ProcessInstance) => {
        this.processInstance = data;
        const definitionKey = data.processDefinitionId.split(':')[0];
        this.camundaService.getDefinitionByKey(definitionKey).subscribe((def: any) => {
          this.processDefinitionId = def.id;
          this.loadDiagram();
        });

        if (this.processInstance.endTime) {
          this.etatStats = { ongoing: 0, finished: 1 };
        } else {
          this.etatStats = { ongoing: 1, finished: 0 };
        }

        this.isDataReady = true; 
      });
    });
  }

  ngAfterViewInit(): void {
    // Attendre un petit délai pour être sûr que le canvas est affiché
    setTimeout(() => {
      if (this.isDataReady) {
        this.displayChart();
      }
    }, 300); 
  }
  

  loadDiagram(): void {
    if (!this.processDefinitionId) return;
    console.log('🧩 Definition ID:', this.processDefinitionId);

    const container = document.getElementById('bpmnCanvas');
    if (!container) {
      console.warn('Le conteneur bpmnCanvas est introuvable');
      return;
    }



    const viewer = new BpmnViewer({ container });
    
    this.camundaService.getBpmnXml(this.processDefinitionId).subscribe((res: any) => {
      if (res && res.bpmn20Xml && res.bpmn20Xml.includes('<bpmn:process')) {
        this.hasDiagram = true;
              viewer.importXML(res.bpmn20Xml, (err: any) => {
          if (err) {
            console.error('Erreur de chargement du diagramme BPMN :', err);
          } else {
            console.log('Diagramme BPMN chargé avec succès');
          }
        });
      } else {
        this.hasDiagram = false;
        console.warn(' Aucun diagramme BPMN trouvé pour ce process');
      }
      
    });
    
  }

  displayChart(): void {
    const canvas = document.getElementById('etatChart') as HTMLCanvasElement;
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    // Si un ancien chart existe, le détruire
    if (this.etatChartInstance) {
      this.etatChartInstance.destroy();
    }
  
    // Créer le nouveau chart
    this.etatChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['En cours', 'Terminés'],
        datasets: [{
          data: [this.etatStats.ongoing, this.etatStats.finished],
          backgroundColor: ['#f6c23e', '#1cc88a']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
  

}
