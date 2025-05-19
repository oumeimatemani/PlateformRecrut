import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsPreslectionnesComponent } from './profils-preslectionnes.component';

describe('ProfilsPreslectionnesComponent', () => {
  let component: ProfilsPreslectionnesComponent;
  let fixture: ComponentFixture<ProfilsPreslectionnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilsPreslectionnesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilsPreslectionnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
