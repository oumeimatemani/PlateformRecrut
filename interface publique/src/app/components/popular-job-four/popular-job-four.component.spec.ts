import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobFourComponent } from './popular-job-four.component';

describe('PopularJobFourComponent', () => {
  let component: PopularJobFourComponent;
  let fixture: ComponentFixture<PopularJobFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
