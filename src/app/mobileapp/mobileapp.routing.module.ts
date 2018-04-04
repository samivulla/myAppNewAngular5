import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { MobileappComponent } from './mobileapp.component';
const routes : Routes = [
    {path:'',component:MobileappComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class MobileRoutingModule{}