
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location, NgClass, PlatformLocation } from '@angular/common';
interface MenuItem {
  label?: string
  title: string;
  icon?: string;
  route?: string;
  badge?: boolean;
  roles?: string[];  // Les rôles qui peuvent voir cet élément de menu
  subMenu?: {
    title: string;
    route?: string;
    icon?: string;  
    theme?: string;
    subBadge?: boolean;
    roles?: string[];
    subsubMenu?: { title: string; route: string; roles?: string[]; }[]
    subMenu?: MenuItem[]; 
  }[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Output() newTitleEvent = new EventEmitter<{ title: string }>(); // DashBoard Title
  @Output() mouseHoverEvent = new EventEmitter<string>(); // Data pass Admin page

  email: string = 'marquezzzz@mail.com';
  activeToggle: string = '';
  localData: any = '';
  elementValue: any = '';
  currentHref: string = "";
  public isVisited = false;

  date:any;
  

  constructor(private router: Router, private location: Location, private backLocation: PlatformLocation) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.currentHref = location.path();
      } else {
        this.currentHref = '/index'
      }
    });
    backLocation.onPopState(() => {   // back click get url
      this.handleActiveMenu(window.location.pathname);
    });
  }

  ngDoCheck(): void {
    this.elementValue = document.body.getAttribute('data-theme-version');
  }

  getActive(menu: any) {     //  side menu manage
    if (this.activeToggle != menu) {
      this.activeToggle = menu;
    } else {
      this.activeToggle = '';
    }
  }
  hoverAdd(val: any) {
    const getStyle = document.body.getAttribute('data-sidebar-style')
    if (getStyle == 'icon-hover') {
      this.mouseHoverEvent.emit(val);
    }
  }
  checkVisited() {
    this.isVisited = !this.isVisited;
  }
  ngOnInit(): void {
    this.elementValue = document.body.getAttribute('data-theme-version');
    this.handleActiveMenu(this.currentHref);
    this.date = new Date().getFullYear();

  }

  themeMode(menu: any) {    // dark-light theme set function
    this.activeSubMenu = '';
    localStorage.setItem("data-theme-version", menu);
    this.localData = localStorage.getItem('data-theme-version');
    this.elementValue = this.localData;
    document.body.setAttribute('data-theme-version', this.localData);
  }

  activeMenu: string = "";
  activeSubMenu: string = "";
  activeSubSubMenu: string = "";

  handleActiveMenu(val: any) {
    this.sidebarMenu.map((data: any, ind: any) => {
      if (data.route == val) {
        this.activeMenu = data.title;
      }
      data.subMenu?.map((item: any, ind: any) => {
        if (item.route == val) {
          this.activeMenu = data.title;
          this.activeSubMenu = item.title;
          this.activeSubSubMenu = "";
        }
        item.subsubMenu?.map((item1: any, ind: any) => {
          if (item1.route == val) {
            this.activeMenu = data.title;
            this.activeSubMenu = item.title;
            this.activeSubSubMenu = item1.title
          }
        })
      })
    })
    this.newTitleEvent.emit({ title: this.activeMenu });
  }

  handleMenu(val: any) {
    if (this.activeMenu == "Chat") {
      this.activeMenu = val;
    } else {
      if (this.activeMenu == val) {
        this.activeMenu = "";
      } else {
        this.activeMenu = val;
      }
    }
  }
  handleActiveSubMenu(val: any) {
    if (this.activeSubMenu == val) {
      this.activeSubMenu = "";
    } else {
      this.activeSubMenu = val;
    }
  }
  sidebarMenu: MenuItem[] = [
    // GESTION DES UTILISATEURS (ADMIN)
    {
      title: "Gestion des utilisateurs",
      icon: "flaticon-381-user",  
      roles: ["ADMIN"],
      subMenu: [
        { title: "- 👤 Liste des Candidats", route: "/admin/candidats", icon: "flaticon-381-user-7" },
        { title: "- 👨‍💼 Liste des Utilisateurs Administratifs", route: "/admin/admins", icon: "flaticon-381-user-7" },

      ]
    },

    // GESTION DES CANDIDATURES (RH)
    {
      title: "Gestion des candidatures",
      icon: "flaticon-381-briefcase", 
      roles: ["RH"], 
      subMenu: [
        { title: "- Annonces", route: "/rh/annonces", icon: "flaticon-381-newspaper" },
        { title: "- Candidatures", route: "/rh/candidatures", icon: "flaticon-381-folder" },
        { title: "- Workflow Monitoring", route: "/rh/workflow-monitoring", icon: "flaticon-381-networking" },
        { title: "- Intégration", route: "/rh/integration", icon: "flaticon-381-add-user" }
      ]
    },

    // GESTION DES ÉVALUATIONS TECHNIQUES (EXPERT_TECHNIQUE)
    {
      title: "Gestion des évaluations techniques",
      icon: "flaticon-381-notepad",  // Icône représentant un bloc-notes ou des évaluations
      roles: ["EXPERT_TECHNIQUE"], 
      subMenu: [
        { title: "- Tests en ligne", route: "/expert/tests", icon: "flaticon-381-document" },
        { title: "- Entretiens", route: "/expert/entretiens", icon: "flaticon-381-chat" },
        { title: "- Suivi des résultats", route: "/expert/resultats", icon: "flaticon-381-bar-chart" },
      ]
    },

    // VALIDATION MANAGERIALE (MANAGER)
    {
      title: "Validation managériale",
      icon: "flaticon-381-lock",  
      roles: ["MANAGER"], 
      subMenu: [
        { title: "- Profils présélectionnés", route: "/manager/profils-preslectionnes", icon: "flaticon-381-user-3" },
        { title: "- Validation des candidatures", route: "/manager/validation", icon: "flaticon-381-success" },
        { title: "- Affectation des candidats", route: "/manager/affectation", icon: "flaticon-381-network" }
      ]
    },
    
    // REPORTING ET TABLEAU DE BORD (RH & MANAGER)
    {
      title: "Reporting & Tableau de bord",
      icon: "flaticon-381-presentation",  
      roles: ["RH", "MANAGER"], 
      subMenu: [
        { title: "- Tableau de bord global", route: "/dashboard/global", icon: "flaticon-381-analytics" },
        { title: "- Rapports personnalisés", route: "/dashboard/reports", icon: "flaticon-381-pie-chart" },
      ]
    },

    // HISTORIQUE DES CANDIDATURES (ADMIN, RH, MANAGER)
    {
      title: "Historique des candidatures",
      icon: "flaticon-381-calendar",  
      roles: ["ADMIN", "RH", "MANAGER"], 
      subMenu: [
        { title: "- Historique complet", route: "/historique/complet", icon: "flaticon-381-notebook" },
        { title: "- Filtrer par statut", route: "/historique/filtre-statut", icon: "flaticon-381-filter" },
        { title: "- Filtrer par utilisateur", route: "/historique/filtre-utilisateur", icon: "flaticon-381-user-2" }
      ]
    }

  ]

}
