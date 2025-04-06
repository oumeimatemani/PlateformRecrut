import { Component, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface type {
  title: string,
  company: string,
  companylogo: string,
  salary: string,
  location: string,
  url: string,
}
@Component({
  selector: 'app-search-job',
  standalone: true,
  imports: [
    RouterLink,
    DropdownComponent
  ],
  templateUrl: './search-job.component.html',
  styleUrl: './search-job.component.css'
})
export class SearchJobComponent {

  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  dropdown_item = {
    select: 'Newest',
    value: ['Newest', 'Latest', 'Oldest'],
    image: ['assets/images/svg/arrow-down-short.svg']
  }

  jobs: type[] = [
    {
      title: "Senior UX Designer",
      company: "Highspeed Studios",
      companylogo: "assets/images/companylogo/1.svg",
      salary: "$14,000 - $25,000",
      location: "London, England",
      url: "admin/profile",
    },
    {
      title: "Intern UX Designer",
      company: "Maximoz Team",
      companylogo: "assets/images/companylogo/2.svg",
      salary: "$500 - $1,000",
      location: "Manchester, England",
      url: "admin/profile",
    },
    {
      title: "Junior UX Designer",
      company: "Vvibu Leu Boz Studios",
      companylogo: "assets/images/companylogo/3.svg",
      salary: "$8,000 - $12,000",
      location: "Oxford, England",
      url: "admin/profile",
    },
    {
      title: "Principal UX Designer",
      company: "Lowvoltages Team",
      companylogo: "assets/images/companylogo/4.svg",
      salary: "$11,000 - $60,000",
      location: "London, England",
      url: "admin/profile",
    },
    {
      title: "Senior UX Designer",
      company: "Highspeed Studios",
      companylogo: "assets/images/companylogo/5.svg",
      salary: "$500 - $1,000",
      location: "London, England",
      url: "admin/profile",
    },
  ]
}
