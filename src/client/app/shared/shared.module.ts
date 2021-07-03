import { NgModule } from '@angular/core';
import { AppHeaderModule } from './app-header/app-header.module';
import { AppSidebarModule } from './app-sidebar/app-sidebar.module';
import { DesignSystemModule } from './design-system/design-system.module';



@NgModule({
  exports: [
    DesignSystemModule,
    AppHeaderModule,
    AppSidebarModule,
  ],
})
export class SharedModule { }
