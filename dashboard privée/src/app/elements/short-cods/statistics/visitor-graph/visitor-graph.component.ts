import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';
import { DropdownComponent } from '../../../dropdown/dropdown.component';

@Component({
  selector: 'app-visitor-graph',
  standalone: true,
  imports: [
    BarChartApexComponent,
    DropdownComponent
  ],
  templateUrl: './visitor-graph.component.html',
  styleUrl: './visitor-graph.component.css'
})
export class VisitorGraphComponent {

  dropdown_item = {
    select: 'Month',
    value: ['Month', 'Week', 'Today']
  }

  chartBar = {
    series: [{
      name: 'Income',
      data: [420, 550, 650, 220, 650, 470, 310, 700, 290, 470, 370, 300, 280, 500, 580, 270, 470, 370]
    }, {
      name: 'Expenses',
      data: [270, 650, 201, 90, 250, 750, 470, 550, 650, 270, 570, 450, 350, 270, 290, 470, 270, 600]
    }],
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
      },

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: 'transparent'
    },
    legend: {
      show: false,
      fontSize: '12px',
      fontWeight: 300,

      labels: {
        colors: 'black',
      },
      position: 'bottom',
      horizontalAlign: 'center',
      markers: {
        width: 19,
        height: 19,
        strokeWidth: 0,
        radius: 19,
        strokeColor: '#fff',
        fillColors: ['#8743DF', '#2BC155'],
        offsetX: 0,
        offsetY: 0
      }
    },
    yaxis: {
      show: false
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
      labels: {
        style: {
          colors: '#808080',
          fontSize: '14px',
          fontFamily: 'Poppins',
          fontWeight: 100,

        },
      },
    },
    colors: ['#8743DF', '#2BC155'],
    fill: {
      colors: ['#8743DF', '#2BC155'],
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val:any) {
          return "$ " + val + " thousands"
        }
      }
    },
    responsive: [{
      breakpoint: 575,
      options: {
        xaxis: {
          labels: {
            style: {
              fontSize: '9px'
            },
          },
        },
      },
    }]
  }
}
