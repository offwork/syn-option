import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignSystemModule } from '../design-system/design-system.module';
import { HeaderComponent } from './components/header.component';



@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    DesignSystemModule,
  ]
})
export class AppHeaderModule { }
