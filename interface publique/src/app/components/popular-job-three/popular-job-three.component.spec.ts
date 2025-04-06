import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularJobThreeComponent } from './popular-job-three.component';

describe('PopularJobThreeComponent', () => {
  let component: PopularJobThreeComponent;
  let fixture: ComponentFixture<PopularJobThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularJobThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularJobThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
