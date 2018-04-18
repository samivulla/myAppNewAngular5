import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatSidenavModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatSidenavModule,MatIconModule],
  exports: [MatButtonModule,MatToolbarModule,MatSidenavModule,MatIconModule],
})
export class MaterialModule { }