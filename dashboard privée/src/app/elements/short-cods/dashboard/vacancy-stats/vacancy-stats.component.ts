import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownComponent } from '../../../dropdown/dropdown.component';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';
import { CandidatureService } from '../../../../services/candidature.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ChartPoint {
  x: number;
  y: number;
}

@Component({
  selector: 'app-vacancy-stats',
  standalone: true,
  imports: [DropdownComponent, BarChartApexComponent, CommonModule, FormsModule],
  templateUrl: './vacancy-stats.component.html',
  styleUrl: './vacancy-stats.component.css'
})
export class VacancyStatsComponent implements OnInit {
  constructor(private candidatureService: CandidatureService) {}

  @Output() selectionChange = new EventEmitter<string>();

  selectedFilter: string = 'mois';
  maxValue: number = 0;

  showTotal: boolean = true;
  showAccepted: boolean = false;
  showRejected: boolean = false;


  dropdown_item = {
    select: 'mois',
    value: ['mois', 'semaine', 'aujourd\'hui']
  };

  lineChartOption: any = {
    series: [
      { name: 'Total Candidatures', data: [] as ChartPoint[] },
      { name: 'Candidatures Acceptées', data: [] as ChartPoint[] },
      { name: 'Candidatures Refusées', data: [] as ChartPoint[] }
    ],
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: true,
        tools: {
          download: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true
      }
    },    
    colors: ['#2BC155', '#3F9AE0', '#FF424D'],
    legend: { show: true },
    dataLabels: { enabled: false },
    stroke: { width: 4, curve: 'smooth' },
    xaxis: {
      type: 'numeric',
      labels: {
        formatter: (value: number) => `Semaine ${value}`
      }
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      labels: {
        formatter: (value: any) => value.toFixed(0)
      }
    },
    fill: {
      opacity: 0.05,
      type: 'solid'
    },
    tooltip: {
      x: { show: false }
    }
  };

  ngOnInit(): void {
    this.loadChartData(this.selectedFilter);
  }

  loadChartData(filter: string): void {
    this.candidatureService.getCandidatureStats().subscribe(data => {
      console.log('Données récupérées depuis l’API :', data);

      this.maxValue = Math.max(data.total, data.accepted, data.rejected);

      let totalData: ChartPoint[] = [];
      let acceptedData: ChartPoint[] = [];
      let rejectedData: ChartPoint[] = [];

      if (filter === 'mois') {
        totalData = [
          { x: 1, y: data.total },
          { x: 2, y: 0 },
          { x: 3, y: 0 }
        ];
        acceptedData = [
          { x: 1, y: data.accepted },
          { x: 2, y: 0 },
          { x: 3, y: 0 }
        ];
        rejectedData = [
          { x: 1, y: data.rejected },
          { x: 2, y: 0 },
          { x: 3, y: 0 }
        ];
      } else if (filter === 'semaine') {
        totalData = [
          { x: 1, y: Math.round(data.total / 2) },
          { x: 2, y: Math.round(data.total / 2) }
        ];
        acceptedData = [
          { x: 1, y: Math.round(data.accepted / 2) },
          { x: 2, y: Math.round(data.accepted / 2) }
        ];
        rejectedData = [
          { x: 1, y: Math.round(data.rejected / 2) },
          { x: 2, y: Math.round(data.rejected / 2) }
        ];
      } else if (filter === 'aujourd\'hui') {
        totalData = [{ x: 1, y: data.total }];
        acceptedData = [{ x: 1, y: data.accepted }];
        rejectedData = [{ x: 1, y: data.rejected }];
      }

      this.lineChartOption.series = [];

      if (this.showTotal) {
        this.lineChartOption.series.push({ name: 'Total Candidatures', data: totalData });
      }
      if (this.showAccepted) {
        this.lineChartOption.series.push({ name: 'Candidatures Acceptées', data: acceptedData });
      }
      if (this.showRejected) {
        this.lineChartOption.series.push({ name: 'Candidatures Refusées', data: rejectedData });
      }

      console.log('Options du graphique mises à jour :', this.lineChartOption);
    });
  }

  onSelectChange(event: any): void {
    this.selectionChange.emit(event.target.value);
  }

  // filtrage de stat
  onFilterChange(newFilter: string): void {
    this.selectedFilter = newFilter;
    this.loadChartData(newFilter);
  }
}
