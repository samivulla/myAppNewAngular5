import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoftwareTestingComponent } from './software-testing.component';

const routes: Routes = [
    { path: '', component: SoftwareTestingComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SoftwareTestingRoutingModule { }
