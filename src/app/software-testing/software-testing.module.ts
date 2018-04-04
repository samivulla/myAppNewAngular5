import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareTestingComponent } from './software-testing.component';
import { SoftwareTestingRoutingModule } from './software-testing-routing.module';

@NgModule({
    imports: [SoftwareTestingRoutingModule],
    declarations: [SoftwareTestingComponent],
    exports: [SoftwareTestingRoutingModule]
})
export class SoftwareTestingModule { } 
