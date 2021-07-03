import { Component } from '@angular/core';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'syn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  quotes$ = this.servcie.getQuotes();

  constructor(public servcie: StocksService) {}
}
