import { Component } from '@angular/core';
import { DropdownComponent } from '../../../dropdown/dropdown.component';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-vacancy-stats',
  standalone: true,
  imports: [DropdownComponent, BarChartApexComponent],
  templateUrl: './vacancy-stats.component.html',
  styleUrl: './vacancy-stats.component.css'
})
export class VacancyStatsComponent {
  dropdown_item = {
    select: 'Month',
    value: ['Month', 'Week', 'Today']
  }
  lineChartOption = {
    series: [{
      name: 'Application Sent',
      data: [31, 40, 28, 51, 42, 60, 40]
    }, {
      name: 'Interviews',
      data: [11, 32, 45, 32, 34, 70, 41]
    }, {
      name: 'Rejected',
      data: [12, 35, 55, 42, 44, 80, 51]
    }],
    chart: {
      height: 300,
      toolbar: {
        show: false
      },
      type: 'area',
    },
    colors: ['#2BC155', '#3F9AE0', '#ff424d'],
    legend: {
      show: true
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 4,
      curve: 'smooth'
    },
    xaxis: {
      show: true,
      lines: {
        show: false,
      },
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 5, // Number of ticks (intervals) on the y-axis
      min: 0,
      max: 100,
      labels: {
        formatter: function(value:any) {
          return value.toFixed(0); // Display labels as whole numbers
        }
      }
    },
    fill: {
      opacity: 0.05,
      type: 'solid'
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };
}
