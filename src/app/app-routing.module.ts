import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SoftdevelpComponent } from './softdevelp/softdevelp.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { SoftwareTestingComponent } from './software-testing/software-testing.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  { path: '', redirectTo: '/whatsnew', pathMatch: 'full' },
  { path: 'whatsnew', component: WhatsNewComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'softdevp/:id', component: SoftdevelpComponent },
  {
    path: 'webdesign',
    //  component: WebdesignComponent
    loadChildren: './webdesign/webdesign.module#WebDesignModule'
  },
  {
    path: 'mobileapp',
    loadChildren: './mobileapp/mobileapp.module#MobileModule'
    // component: MobileappComponent
  },
  {
    path: 'softtesting',
    // component?: SoftwareTestingComponent
    loadChildren: './software-testing/software-testing.module#SoftwareTestingModule'
  }, // need to lazy load
  {
    path: 'login',
    //  component: LoginComponent 
    loadChildren: './login/login.module#LoginModule'

  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }