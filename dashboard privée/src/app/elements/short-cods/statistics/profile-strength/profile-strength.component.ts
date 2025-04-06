import { Component, Input } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-profile-strength',
  standalone: true,
  imports: [
    BarChartApexComponent
  ],
  templateUrl: './profile-strength.component.html',
  styleUrl: './profile-strength.component.css'
})
export class ProfileStrengthComponent {
  @Input() data: any;

  stackedChart = {
    series: [{
      name: 'Aplication Sent',
      data: [20]
    }, {
      name: 'Appllication Answered',
      data: [30]
    }, {
      name: 'Hired',
      data: [15]
    }, {
      name: 'Pending',
      data: [25]
    }],
    chart: {
      type: 'bar',
      height: 90,
      stacked: true,
      toolbar: {
        show: false,
      },
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 20,
        // startingShape: 'rounded'
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 0,
      colors: ['#fff']
    },
    colors: ['#2BC155', '#FF9B52', '#3F9AE0', '#C4C4C4'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },

    },
    yaxis: {
      show: false,

    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1

    },
    legend: {
      show: false,

    }
  }
}
