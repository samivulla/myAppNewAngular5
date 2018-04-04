import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebdesignComponent } from './webdesign.component';
import { WebdesignRouterModule } from './webdesign.routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [WebdesignRouterModule,
        CommonModule,
        FormsModule
    ],
        
    exports: [WebdesignRouterModule],
    declarations: [WebdesignComponent]
})
export class WebDesignModule { }
