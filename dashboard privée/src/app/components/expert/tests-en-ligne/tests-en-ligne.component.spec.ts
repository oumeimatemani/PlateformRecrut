import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsEnLigneComponent } from './tests-en-ligne.component';

describe('TestsEnLigneComponent', () => {
  let component: TestsEnLigneComponent;
  let fixture: ComponentFixture<TestsEnLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsEnLigneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
