import { Component, Input, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

// import { WgTimeline1Component } from '../widget/list/wg-timeline-1/wg-timeline-1.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
    TitleCasePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    username: string = 'Utilisateur';

    
  @Input() dashboardTitle: any;

  fullScreenClass: boolean = false;
  toggleMode: any;
  elementValue: any;
  localData: any = '';
  currentTitle: string = '';

  role: string = ''; 


  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.theme == 'dark' || params.theme == 'light') {
        localStorage.setItem("data-theme-version", params.theme);
      }
    });
  }

  ngAfterContentChecked() {
    if (this.router.url == '/admin') {
      this.currentTitle = 'Dashboard';
    } else {
      this.currentTitle = this.dashboardTitle ? this.dashboardTitle : 'DashBoard';
    }
  }

  ngDoCheck() {
    this.themeMode2();
  }

  themeMode2() {    // Theme mode dark - light
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData != null) {
      document.body.setAttribute('data-theme-version', this.localData);
    }
  }

  chatboxActive() { // Chatbox manage
    document.getElementById("chatBox")?.setAttribute("class", "chatbox active");
  }
  eventSidebarActive() { // Event Sidebar manage
    if (document.getElementById("eventSidebar")?.getAttribute('class') == 'event-sidebar dz-scroll') {
      document.getElementById("eventSidebar")?.setAttribute("class", "event-sidebar dz-scroll active");
    } else {
      document.getElementById("eventSidebar")?.setAttribute("class", "event-sidebar dz-scroll");
    }
  }

  urlActive(url: any) {
    if (url == '/admin') {
      this.currentTitle = 'Dashboard';
    } else {
      this.currentTitle = url.split('/admin/')[1].split('?')[0].replace('-', ' ');
    }
  }

  themeMode() {     // Theme mode dark - light
    this.elementValue = document.body.getAttribute('data-theme-version');
    this.localData = localStorage.getItem('data-theme-version');

    if (this.elementValue == 'light' && this.localData == 'light') {
      this.toggleMode = 'dark';
    } else {
      this.toggleMode = 'light';
    }
    localStorage.setItem("data-theme-version", this.toggleMode);
    this.localData = localStorage.getItem('data-theme-version');
    document.body.setAttribute('data-theme-version', this.localData);
  }


  getDisplayRole(role: string): string {
    switch (role) {
      case 'ROLE_ADMIN': return 'Administrateur';
      case 'ROLE_RH': return 'Responsable RH';
      case 'ROLE_MANAGER': return 'Manager';
      case 'ROLE_EXPERT_TECHNIQUE': return 'Expert Technique';
      default: return 'Utilisateur';
    }
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = decodeURIComponent(params['username']);
      }
    
      if (params['role']) {
        const rawRole = decodeURIComponent(params['role']);
        console.log("🔐 Rôle brut reçu :", rawRole);
        this.role = this.getDisplayRole(rawRole);
      }
    });
    
    
  }
  
  
}
