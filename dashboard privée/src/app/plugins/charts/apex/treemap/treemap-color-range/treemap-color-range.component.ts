import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-treemap-color-range',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './treemap-color-range.component.html',
  styleUrl: './treemap-color-range.component.css'
})
export class TreemapColorRangeComponent {
  chartOptions = {
    series: [
      {
        data: [
          {
            x: "INTC",
            y: 1.2
          },
          {
            x: "GS",
            y: 0.4
          },
          {
            x: "CVX",
            y: -1.4
          },
          {
            x: "GE",
            y: 2.7
          },
          {
            x: "CAT",
            y: -0.3
          },
          {
            x: "RTX",
            y: 5.1
          },
          {
            x: "CSCO",
            y: -2.3
          },
          {
            x: "JNJ",
            y: 2.1
          },
          {
            x: "PG",
            y: 0.3
          },
          {
            x: "TRV",
            y: 0.12
          },
          {
            x: "MMM",
            y: -2.31
          },
          {
            x: "NKE",
            y: 3.98
          },
          {
            x: "IYT",
            y: 1.67
          }
        ]
      }
    ],
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true,

      offsetY: -3
    },
    
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: "#CD363A"
            },
            {
              from: 0.001,
              to: 6,
              color: "#52B12C"
            }
          ]
        }
      }
    }
  };
}
