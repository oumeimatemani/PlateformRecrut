import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCompaniesTwoComponent } from './best-companies-two.component';

describe('BestCompaniesTwoComponent', () => {
  let component: BestCompaniesTwoComponent;
  let fixture: ComponentFixture<BestCompaniesTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestCompaniesTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCompaniesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
