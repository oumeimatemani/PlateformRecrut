import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAboutInfoComponent } from './user-about-info.component';

describe('UserAboutInfoComponent', () => {
  let component: UserAboutInfoComponent;
  let fixture: ComponentFixture<UserAboutInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAboutInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAboutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
