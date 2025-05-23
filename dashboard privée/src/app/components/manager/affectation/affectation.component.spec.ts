import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationComponent } from './affectation.component';

describe('AffectationComponent', () => {
  let component: AffectationComponent;
  let fixture: ComponentFixture<AffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffectationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
