import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { SoftdevelpComponent } from './softdevelp/softdevelp.component';
// import { WebdesignComponent } from './webdesign/webdesign.component';
//import { MobileappComponent } from './mobileapp/mobileapp.component';
// import { SoftwareTestingComponent } from './software-testing/software-testing.component';
// import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminComponent } from './admin/admin.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SoftdevelpComponent,
    InputComponent,
    AdminComponent,
    WhatsNewComponent,
    RegistrationComponent,

    // WebdesignComponent,
    // MobileappComponent,
    // SoftwareTestingComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
