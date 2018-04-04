import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { SoftdevelpComponent } from './softdevelp/softdevelp.component';
// import { WebdesignComponent } from './webdesign/webdesign.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
// import { SoftwareTestingComponent } from './software-testing/software-testing.component';
// import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SoftdevelpComponent,
    // WebdesignComponent,
    MobileappComponent,
    // SoftwareTestingComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
