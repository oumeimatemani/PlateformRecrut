import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListAdminsComponent } from './user-list-admins.component';

describe('UserListAdminsComponent', () => {
  let component: UserListAdminsComponent;
  let fixture: ComponentFixture<UserListAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListAdminsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
