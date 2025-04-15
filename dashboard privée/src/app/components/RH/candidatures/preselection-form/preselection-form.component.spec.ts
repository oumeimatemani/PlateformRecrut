import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreselectionFormComponent } from './preselection-form.component';

describe('PreselectionFormComponent', () => {
  let component: PreselectionFormComponent;
  let fixture: ComponentFixture<PreselectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreselectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreselectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
