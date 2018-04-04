import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouterModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../app.material.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
    imports:[
        LoginRouterModule,
        MaterialModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatGridListModule],
    exports:[LoginRouterModule],
    declarations:[LoginComponent]
})

export class LoginModule {}