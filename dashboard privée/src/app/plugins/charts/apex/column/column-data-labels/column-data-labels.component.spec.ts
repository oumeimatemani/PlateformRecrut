import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDataLabelsComponent } from './column-data-labels.component';

describe('ColumnDataLabelsComponent', () => {
  let component: ColumnDataLabelsComponent;
  let fixture: ComponentFixture<ColumnDataLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnDataLabelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnDataLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
