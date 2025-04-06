import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedJobsComponent } from './recomended-jobs.component';

describe('RecomendedJobsComponent', () => {
  let component: RecomendedJobsComponent;
  let fixture: ComponentFixture<RecomendedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
