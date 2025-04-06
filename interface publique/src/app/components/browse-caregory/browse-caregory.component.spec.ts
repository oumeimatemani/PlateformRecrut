import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCaregoryComponent } from './browse-caregory.component';

describe('BrowseCaregoryComponent', () => {
  let component: BrowseCaregoryComponent;
  let fixture: ComponentFixture<BrowseCaregoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseCaregoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseCaregoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
