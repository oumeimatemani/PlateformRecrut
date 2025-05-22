import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as feather from 'feather-icons';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClickOutsideDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() navLight: any;
  @Input() navClass: any;
  @Input() bgLight: any;
  @Input() navFull: any;

  scrolled: boolean = false;
  currentUrl: string = '';
  subManu: string = '';
  showToggleMenu: boolean = false;
  user: boolean = false;

  isLoggedIn: boolean = false;
  currentUser: any = null;
  roles: string[] = [];

  displayRole: string = '';

  constructor(private tokenStorage: TokenStorageService) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  ngAfterViewInit() {
    feather.replace();
  }

  redirectToDashboard(): void {
    const user = this.tokenStorage.getUser();
    const token = this.tokenStorage.getToken();
  
    if (user && user.username && user.roles && token) {
      const internalRoles = ['ROLE_ADMIN', 'ROLE_RH', 'ROLE_MANAGER', 'ROLE_EXPERT_TECHNIQUE'];
      const matchedRole = user.roles.find((role: string) => internalRoles.includes(role));
  
      if (matchedRole) {
        window.open('http://localhost:4300/login', '_blank');
      }
    }
  }
  
  
  
  ngOnInit(): void {
    this.currentUrl = window.location.pathname;
    window.scrollTo(0, 0);
  
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorage.getUser();
      this.roles = this.currentUser.roles;
  
      // Pour afficher un seul rôle lisible
      if (this.roles.includes('ROLE_ADMIN')) this.displayRole = 'Admin';
      else if (this.roles.includes('ROLE_RH')) this.displayRole = 'RH';
      else if (this.roles.includes('ROLE_MANAGER')) this.displayRole = 'Manager';
      else if (this.roles.includes('ROLE_EXPERT_TECHNIQUE')) this.displayRole = 'Expert Technique';
    }
  }
  

  openSubManu(item: string) {
    this.subManu = item;
  }

  toggleMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  userDropdow(e: any) {
    e.preventDefault();
    this.user = !this.user;
  }

  closeOutSideClick(e: any) {
    this.user = false;
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
