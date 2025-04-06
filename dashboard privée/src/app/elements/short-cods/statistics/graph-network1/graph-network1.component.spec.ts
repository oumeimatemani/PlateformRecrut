import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNetwork1Component } from './graph-network1.component';

describe('GraphNetwork1Component', () => {
  let component: GraphNetwork1Component;
  let fixture: ComponentFixture<GraphNetwork1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphNetwork1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphNetwork1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
