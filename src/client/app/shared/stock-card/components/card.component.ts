import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'syn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() symbol!: string;
  @Input() stockName!: string;
  @Input() regularMarketPrice!: number;
  @Input() change!: number;
  @Input() currency!: string;
  @Input() regularMarketTime!: Date | string;
}
