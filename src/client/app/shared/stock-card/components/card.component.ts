import { Component, Input } from '@angular/core';

@Component({
  selector: 'syn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() symbol!: string;
  @Input() regularMarketPrice!: number;
  @Input() currency!: string;
  @Input() regularMarketTime!: Date | string;
}
