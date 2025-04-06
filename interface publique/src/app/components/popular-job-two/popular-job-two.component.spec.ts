import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobTwoComponent } from './popular-job-two.component';

describe('PopularJobTwoComponent', () => {
  let component: PopularJobTwoComponent;
  let fixture: ComponentFixture<PopularJobTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
