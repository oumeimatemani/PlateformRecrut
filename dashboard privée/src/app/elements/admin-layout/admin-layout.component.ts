import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { UserListComponent } from '../../components/admin/users/user-list/user-list.component';
import { WorkflowMonitoringComponent } from '../../components/admin/workflow-monitoring/workflow-monitoring.component';
import { UserFormComponent } from '../../components/admin/users/user-form/user-form.component';
import { RoleListComponent } from '../../components/admin/roles/role-list/role-list.component';
import { RoleFormComponent } from '../../components/admin/roles/role-form/role-form.component';

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
    UserListComponent,
    WorkflowMonitoringComponent,
    UserFormComponent,
    RoleListComponent,
    RoleFormComponent
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
