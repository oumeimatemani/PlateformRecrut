import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileStrengthComponent } from '../../elements/short-cods/statistics/profile-strength/profile-strength.component';
import { VisitorGraphComponent } from '../../elements/short-cods/statistics/visitor-graph/visitor-graph.component';
import { GraphNetwork1Component } from '../../elements/short-cods/statistics/graph-network1/graph-network1.component';
import { DoughnutChartJsComponent } from '../../elements/chart-config/doughnut-chart-js/doughnut-chart-js.component';

interface appeType {
  title: string,
  total_no: string,
  image: string,
  description: string,
}
interface profileStrengthType {
  title: string,
  total_no: string,
  image: string,
}
interface donutChartSaleType {
  title: string,
  vacancy: string,
  chart: {
    data: number,
    color: string,
    max_height: number,
    cutout: number,
  }[],
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    CommonModule,
    ProfileStrengthComponent,
    VisitorGraphComponent,
    GraphNetwork1Component,
    DoughnutChartJsComponent
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {

  apps: appeType[] = [
    {
      title: "Profile Viewed",
      total_no: "456k",
      image: "assets/images/svg/eye1.svg",
      description: '<span class="font-w600 text-success d-block">+24% </span><span class="fs-12">than last month</span>',
    },
    {
      title: "Unread Messages",
      total_no: "28",
      image: "assets/images/svg/ic_chat.svg",
      description: '<span class="font-w600 fs-12 text-primary d-block">Go to Message</span>',
    },
    {
      title: "Total candidatures",
      total_no: "651",
      image: "assets/images/svg/suitcase1.svg",
      description: '',
    },
    {
      title: "App. Answered",
      total_no: "24",
      image: "assets/images/svg/reply1.svg",
      description: '',
    },
    {
      title: "Interviewed",
      total_no: "261",
      image: "assets/images/svg/calendar-silhouette.svg",
      description: '',
    },
    {
      title: "Hired",
      total_no: "69",
      image: "assets/images/svg/telephone1.svg",
      description: '',
    },
  ];

  profileStrength: profileStrengthType[] = [
    {
      title: "Aplication Sent",
      total_no: "30%",
      image: "assets/images/svg/dot1.svg",
    },
    {
      title: "Appllication Answered",
      total_no: "46%",
      image: "assets/images/svg/dot2.svg",
    },
    {
      title: "Hired",
      total_no: "14%",
      image: "assets/images/svg/dot3.svg",
    },
    {
      title: "Pending",
      total_no: "10%",
      image: "assets/images/svg/dot4.svg",
    },
  ];

  donutChartSale: donutChartSaleType[] = [
    {
      title: 'Engineer',
      vacancy: '5,050 Vacancy',
      chart: [
        {
          data: 66,
          color: '#8743df',
          max_height: 120,
          cutout: 70
        }
      ]
    },
    {
      title: 'Designer',
      vacancy: '10,524 Vacany',
      chart: [
        {
          data: 31,
          color: '#8743df',
          max_height: 120,
          cutout: 70
        }
      ]
    },
    {
      title: 'Manager',
      vacancy: '621 Vacancy',
      chart: [
        {
          data: 75,
          color: '#8743df',
          max_height: 120,
          cutout: 70
        }
      ]
    }
    ,
    {
      title: 'Programmer',
      vacancy: '9,662 Vacancy',
      chart: [
        {
          data: 61,
          color: '#8743df',
          max_height: 120,
          cutout: 70
        }
      ]
    }
  ]
}
