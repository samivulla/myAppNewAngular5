import { RouterModule , Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebdesignComponent } from './webdesign.component';

const routes: Routes = [
    { path: '', component:WebdesignComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule],
    declarations:[]
    
})
export class WebdesignRouterModule {

}