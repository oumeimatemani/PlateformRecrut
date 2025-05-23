import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableCheckboxComponent } from './configurable-checkbox.component';

describe('ConfigurableCheckboxComponent', () => {
  let component: ConfigurableCheckboxComponent;
  let fixture: ComponentFixture<ConfigurableCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurableCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurableCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
