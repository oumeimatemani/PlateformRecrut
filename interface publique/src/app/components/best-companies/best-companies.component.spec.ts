import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCompaniesComponent } from './best-companies.component';

describe('BestCompaniesComponent', () => {
  let component: BestCompaniesComponent;
  let fixture: ComponentFixture<BestCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestCompaniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
