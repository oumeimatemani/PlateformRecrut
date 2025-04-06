import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorGraphComponent } from './visitor-graph.component';

describe('VisitorGraphComponent', () => {
  let component: VisitorGraphComponent;
  let fixture: ComponentFixture<VisitorGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
