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

  constructor(private tokenStorage: TokenStorageService) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  ngAfterViewInit() {
    feather.replace();
  }

  ngOnInit(): void {
    this.currentUrl = window.location.pathname;
    window.scrollTo(0, 0);

    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorage.getUser();
      this.roles = this.currentUser.roles;
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
