import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar.component';
import { DesignSystemModule } from '../design-system/design-system.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    DesignSystemModule,
    RouterModule,
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
})
export class AppSidebarModule { }
