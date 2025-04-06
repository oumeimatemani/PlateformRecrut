import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { JobCategoriesComponent } from './pages/job/job-categories/job-categories.component';


import { JobListFourComponent } from './pages/job/job-list-four/job-list-four.component';

import { JobDetailOneComponent } from './pages/job/job-detail-one/job-detail-one.component';


import { JobApplyComponent } from './pages/job/job-apply/job-apply.component';

import { JobPostComponent } from './pages/job/job-post/job-post.component';

import { CareerComponent } from './pages/job/career/career.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';

import { CandidateListComponent } from './pages/candidate/candidate-list/candidate-list.component';
import { CandidateProfileComponent } from './pages/candidate/candidate-profile/candidate-profile.component';
import { CandidateProfileSettingComponent } from './pages/candidate/candidate-profile-setting/candidate-profile-setting.component';
import { HelpcenterOverviewComponent } from './pages/helpcenter/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterFaqsComponent } from './pages/helpcenter/helpcenter-faqs/helpcenter-faqs.component';
import { GuidesComponent } from './pages/helpcenter/guides/guides.component';
import { HelpcenterSupportComponent } from './pages/helpcenter/helpcenter-support/helpcenter-support.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SignupSuccessComponent } from './pages/auth/signup-success/signup-success.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { LockScreenComponent } from './pages/auth/lock-screen/lock-screen.component';
import { TermsComponent } from './pages/utility/terms/terms.component';
import { MaintenanceComponent } from './pages/special/maintenance/maintenance.component';
import { ErrorComponent } from './pages/special/error/error.component';
import { ThankyouComponent } from './pages/special/thankyou/thankyou.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {'path':'', component:IndexComponent},
    {'path':'job-categories', component:JobCategoriesComponent},
   
      {'path':'job-list-four', component:JobListFourComponent},

    {'path':'job-detail-one', component:JobDetailOneComponent},
    {'path':'job-detail-one/:id', component:JobDetailOneComponent},
   
    {'path':'job-apply', component:JobApplyComponent},
    {'path':'job-post', component:JobPostComponent},
    {'path':'career', component:CareerComponent},
    {'path':'aboutus', component:AboutusComponent},
    {'path':'services', component:ServicesComponent},
    {'path':'candidate-list', component:CandidateListComponent},
    {'path':'candidate-profile', component:CandidateProfileComponent},
    {'path':'candidate-profile/:id', component:CandidateProfileComponent},
    {'path':'candidate-profile-setting', component:CandidateProfileSettingComponent},
    {'path':'helpcenter-overview', component:HelpcenterOverviewComponent},
    {'path':'helpcenter-faqs', component:HelpcenterFaqsComponent},
    {'path':'helpcenter-guides', component:GuidesComponent},
    {'path':'helpcenter-support', component:HelpcenterSupportComponent},
   
    {'path':'login', component:LoginComponent},
    {'path':'signup', component:SignupComponent},
    {'path':'signup-success', component:SignupSuccessComponent},
    {'path':'reset-password', component:ResetPasswordComponent},
    {'path':'lock-screen', component:LockScreenComponent},
    {'path':'terms', component:TermsComponent},
    {'path':'maintenance', component:MaintenanceComponent},
    {'path':'error',component:ErrorComponent},
    {'path':'thankyou', component:ThankyouComponent},
    {'path':'contact', component:ContactComponent},
];
