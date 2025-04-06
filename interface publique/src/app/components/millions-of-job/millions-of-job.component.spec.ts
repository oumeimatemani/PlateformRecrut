import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillionsOfJobComponent } from './millions-of-job.component';

describe('MillionsOfJobComponent', () => {
  let component: MillionsOfJobComponent;
  let fixture: ComponentFixture<MillionsOfJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MillionsOfJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MillionsOfJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
