import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-graph-network1',
  standalone: true,
  imports: [
    BarChartApexComponent
  ],
  templateUrl: './graph-network1.component.html',
  styleUrl: './graph-network1.component.css'
})
export class GraphNetwork1Component {

  radialBar = {
    chart: {
      type: 'radialBar',
      //width:320,
      height: 350,
      offsetY: 0,
      offsetX: 0,
    },
    plotOptions: {
      radialBar: {
        startAngle: -150,
        endAngle: 200,
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 0,
          size: '20%',
          background: 'transparent',
        },
        track: {
          show: true,
          background: '#e1e5ff',
          strokeWidth: '10%',
          opacity: 1,
          margin: 18, // margin is in pixels
        },
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          offsetY: 0,
          offsetX: 0
        },
        legend: {
          position: 'bottom',
          offsetX: 0,
          offsetY: 0
        }
      }
    }],

    fill: {
      opacity: 1
    },
    stroke: {
      lineCap: 'round'
    },
    colors: ['#2BC155', '#FF9B52'],
    series: [73, 64],
    labels: ['Following', 'Followers'],
    legend: {
      fontSize: '16px',
      show: false,
    },
  }
}
