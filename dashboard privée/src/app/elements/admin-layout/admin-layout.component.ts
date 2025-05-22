import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { WorkflowMonitoringComponent } from '../../components/RH/workflow-monitoring/workflow-monitoring.component';
import { CandidatureListComponent } from '../../components/RH/candidatures/candidature-list/candidature-list.component';
import { PreselectionFormComponent } from '../../components/RH/candidatures/preselection-form/preselection-form.component';
import { CandidatureDetailsComponent } from '../../components/RH/candidatures/candidature-details/candidature-details.component';
import { UserListAdminsComponent } from '../../components/admin/users/user-list-admins/user-list-admins.component';
import { UserListCandidatsComponent } from '../../components/admin/users/user-list-candidats/user-list-candidats.component';
import { AnnonceListComponent } from '../../components/RH/annonces/annonce-list/annonce-list.component';
import { AnnonceFormComponent } from '../../components/RH/annonces/annonce-form/annonce-form.component';
import { ProcessusDetailsComponent } from '../../components/RH/workflow-monitoring/processus-details/processus-details.component';
import { ResultatsComponent } from '../../components/expert/resultats/resultats.component';
import { EntretiensComponent } from '../../components/expert/entretiens/entretiens.component';
import { TestsEnLigneComponent } from '../../components/expert/tests-en-ligne/tests-en-ligne.component';
import { IntegrationListComponent } from '../../components/RH/integration/integration-list/integration-list.component';
import { AffectationComponent } from '../../components/manager/affectation/affectation.component';
import { ValidationComponent } from '../../components/manager/validation/validation.component';
import { ProfilsPreslectionnesComponent } from '../../components/manager/profils-preslectionnes/profils-preslectionnes.component';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    FooterComponent,
    NavHeaderComponent,
    HeaderComponent,
    ChatboxComponent,
    WorkflowMonitoringComponent,    
    ProcessusDetailsComponent,
    CandidatureListComponent,
    CandidatureDetailsComponent,
    PreselectionFormComponent,
    UserListAdminsComponent,
    UserListCandidatsComponent,
    AnnonceListComponent,
    AnnonceFormComponent,
    ResultatsComponent,
    EntretiensComponent,
    TestsEnLigneComponent,
    IntegrationListComponent,
    AffectationComponent,
    ValidationComponent,
    ProfilsPreslectionnesComponent
    ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  toggleVal: boolean = false;
  mouseOvered: boolean = false;
  sidebarToggle(eventData: { toggleVal: boolean }) {
    this.toggleVal = eventData.toggleVal;
    setTimeout(() => {
      this.handleMinHeight();
    }, 500)
  }
  iconHoverToggle(val: any) {
    this.mouseOvered = val;
  }

  currentItem: string = '';
  currentRoute: string = '';
  dashboardTitle(value: any) {
    setTimeout(() => {
      this.currentItem = value.title;
      this.currentRoute = value.router;
    }, 100);
  }

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      setTimeout(() => {
        this.handleMinHeight();
      }, 500)
    });
  }

  // Control only mini sidebar handle Function ----
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleMinHeight();
  }

  handleMinHeight() {
    const win_h = window.outerHeight || screen.height;
    const contentBody = document.getElementsByClassName('content-body')[0] as HTMLElement;

    if (!contentBody) { 
        console.warn("L'élément .content-body n'a pas été trouvé dans le DOM.");
        return; 
    }

    if (win_h > 0) {
        contentBody.style.minHeight = (window.innerHeight - 75) + "px";
        const bodyDataSidebarStyle = document.body.getAttribute('data-sidebar-style');
        const mainWrapperID = document.getElementById('main-wrapper')?.className;
        const metismenuHeight = document.querySelector('.deznav .metismenu')?.clientHeight || 0;

        if (
            (bodyDataSidebarStyle === "mini" && metismenuHeight > (window.innerHeight - 60)) ||
            (bodyDataSidebarStyle === "modern" && metismenuHeight > (window.innerHeight - 60)) ||
            (bodyDataSidebarStyle === "full" && mainWrapperID === 'show menu-toggle' && metismenuHeight > (window.innerHeight - 60))
        ) {
            contentBody.style.minHeight = (metismenuHeight + 100) + "px";
        }
    }
}

}
