import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailTwoComponent } from './job-detail-two.component';

describe('JobDetailTwoComponent', () => {
  let component: JobDetailTwoComponent;
  let fixture: ComponentFixture<JobDetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
