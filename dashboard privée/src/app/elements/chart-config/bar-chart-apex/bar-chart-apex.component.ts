import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-bar-chart-apex',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart-apex.component.html',
  styleUrl: './bar-chart-apex.component.css'
})
export class BarChartApexComponent implements OnChanges {
  @Input() chart_item: any | null = null;
  options: any = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chart_item'] && this.chart_item) {
      this.options = this.chart_item;
      console.log("📊 Mise à jour du graphique avec :", this.options);
    }
  }
}
