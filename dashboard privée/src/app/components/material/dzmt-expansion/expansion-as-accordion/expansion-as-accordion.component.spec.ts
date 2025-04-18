import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionAsAccordionComponent } from './expansion-as-accordion.component';

describe('ExpansionAsAccordionComponent', () => {
  let component: ExpansionAsAccordionComponent;
  let fixture: ComponentFixture<ExpansionAsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionAsAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionAsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
