import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule, Sort} from '@angular/material/sort';
import { CurrencyPipe } from '@angular/common';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

export interface Dessert {
  application_id: string;
  date_applied: string;
  image: string;
  title: string;
  company: string;
  application_type: string;
  position: string;
  contact_phone: boolean;
  contact_email: boolean;
  status: string;
  status_class: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [
    MatSortModule,
    DropdownComponent,
    PaginationComponent,
    CurrencyPipe
  ],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {

  dropdown_item = {
    select: 'Newest',
    value: ['Newest', 'Latest', 'Oldest'],
    image: ['assets/images/svg/arrow-down-short.svg']
  }

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: false });
  }


  active = 1;
  page: any = 1;
  totalRows: number = 5;
  totalPage: any = 0;
  allData: any = [];
  boxActive: Boolean = false;


  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  contantHead = {
    title: 'Order List',
    desc: 'Lorem ipsum  dolor sit amet',
    title_path: 'Dashboard'
  }

  desserts: Dessert[] = [
    {
      application_id: "#APL-0001",
      date_applied: "June 1, 2020, 08:22 AM",
      image: "assets/images/companylogo/small/1.svg",
      title: "Highspeed Studios",
      company: "Creative Design Agency",
      application_type: "FULL TIME",
      position: "Senior UX Designer",
      contact_phone: true,
      contact_email: true,
      status: "Candidate",
      status_class: "btn-outline-success",
      isSelected: false
    },
    {
      application_id: "#APL-0002",
      date_applied: "June 1, 2020, 08:22 AM",
      image: "assets/images/companylogo/small/2.svg",
      title: "Funk Inc.",
      company: "IT Department",
      application_type: "PART TIME",
      position: "Junior UI Designer",
      contact_phone: false,
      contact_email: true,
      status: "On-Hold",
      status_class: "btn-outline-warning",
      isSelected: false
    },
    {
      application_id: "#APL-0003",
      date_applied: "June 1, 2020, 08:22 AM",
      image: "assets/images/companylogo/small/3.svg",
      title: "Mosciski Inc.",
      company: "Creative Design Agency",
      application_type: "FREELANCE",
      position: "Intern UI Designer",
      contact_phone: true,
      contact_email: true,
      status: "Pending",
      status_class: "btn-outline-dark",
      isSelected: false
    },
    {
      application_id: "#APL-0004",
      date_applied: "June 1, 2020, 08:22 AM",
      image: "assets/images/companylogo/small/4.svg",
      title: "Mosciski Inc.",
      company: "Creative Design Agency",
      application_type: "FREELANCE",
      position: "Intern UI Designer",
      contact_phone: true,
      contact_email: false,
      status: "Pending",
      status_class: "btn-outline-dark",
      isSelected: false
    },
    {
      application_id: "#APL-0005",
      date_applied: "June 1, 2020, 08:22 AM",
      image: "assets/images/companylogo/small/5.svg",
      title: "Highspeed Studios",
      company: "Creative Design Agency",
      application_type: "FULL TIME",
      position: "Senior UX Designer",
      contact_phone: true,
      contact_email: true,
      status: "Candidate",
      status_class: "btn-outline-success",
      isSelected: false
    },
    {
      application_id: "#APL-0006",
      date_applied: "June 1, 2020, 08:22 AM",
      image: "assets/images/companylogo/small/6.svg",
      title: "Funk Inc",
      company: "IT Department",
      application_type: "PART TIME",
      position: "Junior UI Designer",
      contact_phone: true,
      contact_email: false,
      status: "On-Hold",
      status_class: "btn-outline-warning",
      isSelected: false
    },
  ];

  orderData: Dessert[];

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'application_id': return compare(a.application_id, b.application_id, isAsc);
        case 'date_applied': return compare(a.date_applied, b.date_applied, isAsc);
        case 'company': return compare(a.company, b.company, isAsc);
        case 'application_type': return compare(a.application_type, b.application_type, isAsc);
        case 'position': return compare(a.position, b.position, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
