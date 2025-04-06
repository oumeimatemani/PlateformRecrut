import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-categories',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent {
  @Input()rounded:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.rounded);
    
  }
  categoriesData = [
    {
      icon:'uil uil-gitlab',
      title1:'Business',
      title2:'Development',
      job:'74 Jobs'
    },
    {
      icon:'uil uil-book-open',
      title1:'Marketing &',
      title2:'Communication',
      job:'20 Jobs'
    },
    {
      icon:'uil uil-chart-pie-alt',
      title1:'Project',
      title2:'Management',
      job:'35 Jobs'
    },
    {
      icon:'uil uil-feedback',
      title1:'Customer',
      title2:'Service',
      job:'46 Jobs'
    },
    {
      icon:'uil uil-presentation-line',
      title1:'Software',
      title2:'Engineering',
      job:'60 Jobs'
    },
  ]
}
