import { NgModule } from '@angular/core';
import { MobileappComponent } from './mobileapp.component';
import { MobileRoutingModule } from './mobileapp.routing.module';
@NgModule({
exports:[MobileRoutingModule],
imports:[MobileRoutingModule],
declarations:[MobileappComponent]
})
export class MobileModule {}