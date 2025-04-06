import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobFiveComponent } from './popular-job-five.component';

describe('PopularJobFiveComponent', () => {
  let component: PopularJobFiveComponent;
  let fixture: ComponentFixture<PopularJobFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
