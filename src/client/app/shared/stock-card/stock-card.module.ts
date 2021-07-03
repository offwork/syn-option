import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card.component';
import { DesignSystemModule } from '../design-system/design-system.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DesignSystemModule,
  ],
  exports: [
    CardComponent
  ]
})
export class StockCardModule { }
