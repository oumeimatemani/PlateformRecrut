import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-area-irregular-timeseries',
  standalone: true,
  imports: [BarChartApexComponent],
  templateUrl: './area-irregular-timeseries.component.html',
  styleUrl: './area-irregular-timeseries.component.css'
})
export class AreaIrregularTimeseriesComponent {
  chartOptions = {
    series: [
      {
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: "Total Visits",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false
      },
      stroke: {
        curve: "straight"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 5,
      curve: "straight",
      dashArray: [0, 8, 5]
    },
    legend: {
      tooltipHoverFormatter: function(val:any, opts:any) {
        return (
          val +
          " - <strong>" +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          "</strong>"
        );
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      labels: {
        trim: false
      },
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan"
      ]
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function(val:any) {
              return val + " (mins)";
            }
          }
        },
        {
          title: {
            formatter: function(val:any) {
              return val + " per session";
            }
          }
        },
        {
          title: {
            formatter: function(val:any) {
              return val;
            }
          }
        }
      ]
    },
    colors: ['#8743DF', '#787878', '#00e396'],
    grid: {
      borderColor: "#f1f1f1"
    }
  };
}
