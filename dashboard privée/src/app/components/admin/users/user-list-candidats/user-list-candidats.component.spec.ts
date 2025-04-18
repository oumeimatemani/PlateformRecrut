import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListCandidatsComponent } from './user-list-candidats.component';

describe('UserListCandidatsComponent', () => {
  let component: UserListCandidatsComponent;
  let fixture: ComponentFixture<UserListCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListCandidatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
