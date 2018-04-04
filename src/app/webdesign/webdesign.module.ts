import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebdesignComponent } from './webdesign.component';
import { WebdesignRouterModule } from './webdesign.routing.module';

@NgModule({
    imports:[WebdesignRouterModule],
    exports:[WebdesignRouterModule],
    declarations:[WebdesignComponent]
})
 export class WebDesignModule {}
