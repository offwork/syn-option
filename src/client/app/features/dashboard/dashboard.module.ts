import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { StockCardModule } from '../../shared/stock-card/stock-card.module';
import { DashboardComponent } from './components/dashboard.component';
import { StocksService } from './services/stocks.service';


const routes: Routes = [
  { path: '', component: DashboardComponent }
];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    StockCardModule,
    RouterModule.forChild(routes)
  ],
  providers: [ StocksService ]
})
export class DashboardModule { }
