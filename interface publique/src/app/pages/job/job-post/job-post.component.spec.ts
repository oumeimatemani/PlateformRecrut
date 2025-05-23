import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostComponent } from './job-post.component';

describe('JobPostComponent', () => {
  let component: JobPostComponent;
  let fixture: ComponentFixture<JobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
