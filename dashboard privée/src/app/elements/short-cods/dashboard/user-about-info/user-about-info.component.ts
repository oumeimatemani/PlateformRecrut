import { Component } from '@angular/core';
import { DoughnutChartJsComponent } from '../../../chart-config/doughnut-chart-js/doughnut-chart-js.component';

interface type {
  title: string,
  chart: {
    data: number,
    color: string,
    max_height: number,
    cutout: number
  }[]
}
@Component({
  selector: 'app-user-about-info',
  standalone: true,
  imports: [
    DoughnutChartJsComponent
  ],
  templateUrl: './user-about-info.component.html',
  styleUrl: './user-about-info.component.css'
})
export class UserAboutInfoComponent {

  donutChartSale: type[] = [
    {
      title: 'Research',
      chart: [
        {
          data: 86,
          color: '#ffe0c2',
          max_height: 74,
          cutout: 70
        }
      ]
    },
    {
      title: 'Figma',
      chart: [
        {
          data: 60,
          color: '#82ffa5',
          max_height: 74,
          cutout: 70
        }
      ]
    },
    {
      title: 'Photoshop',
      chart: [
        {
          data: 30,
          color: '#85d3ff',
          max_height: 74,
          cutout: 70
        }
      ]
    }
  ]
}
