import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() dropdown: any | undefined;

  @Output() selectionChange = new EventEmitter<string>(); 

  getValue: any = '';
  getValueImg: any = '';
  selectValue: string = '';
  formControl: boolean = false;

  ngOnInit() {
    this.getValue = this.dropdown.value;
    this.getValueImg = this.dropdown.image;
    this.formControl = this.dropdown.formControl;
    this.selectValue = this.dropdown.select;
  }

  getValueDrop(get: any) {
    this.selectValue = get.item;
    this.selectionChange.emit(this.selectValue); 
  }
}

