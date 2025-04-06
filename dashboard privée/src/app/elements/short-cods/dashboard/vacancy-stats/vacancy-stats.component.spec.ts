import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyStatsComponent } from './vacancy-stats.component';

describe('VacancyStatsComponent', () => {
  let component: VacancyStatsComponent;
  let fixture: ComponentFixture<VacancyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
