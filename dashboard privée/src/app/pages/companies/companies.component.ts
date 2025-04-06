import { Component, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    RouterLink,
    DropdownComponent
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  dropdown_item = {
    select: 'Newest',
    value: ['Newest', 'Latest', 'Oldest'],
    image: ['assets/images/svg/arrow-down-short.svg']
  }

  companies = [
    {
      image: "assets/images/companylogo/medium/1.svg",
      title: "Herman-Carter",
      department: "Internet Service Porvider",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/2.svg",
      title: "Funk Inc",
      department: "IT Department",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/3.svg",
      title: "Highspeed Studios",
      department: "Creative Design Agency",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/4.svg",
      title: "Mosciski Inc",
      department: "Creative Design Agency",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/5.svg",
      title: "Incubator Studios",
      department: "Software House",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/6.svg",
      title: "Naonatu Inc.",
      department: "Creative Design Agency",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/7.svg",
      title: "ColoColo Studios",
      department: "Internet Service Porvider",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/8.svg",
      title: "Funk Inc",
      department: "IT Department",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/9.svg",
      title: "Mosciski Inc",
      department: "Creative Design Agency",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/10.svg",
      title: "Highspeed Studios",
      department: "Creative Design Agency",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/11.svg",
      title: "Simonis Ltd",
      department: "Internet Service Porvider",
      url:"admin/app-profile",
    },
    {
      image: "assets/images/companylogo/medium/12.svg",
      title: "Funk Inc",
      department: "IT Department",
      url:"admin/app-profile",
    },
];
}
