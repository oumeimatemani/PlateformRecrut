import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobOneComponent } from './popular-job-one.component';

describe('PopularJobOneComponent', () => {
  let component: PopularJobOneComponent;
  let fixture: ComponentFixture<PopularJobOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
