import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'syn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  quotes$!: Observable<any[]>

  constructor(public socket: SocketService) {}

  ngOnInit() {
    this.quotes$ = this.socket.listen('dataupdate');
  }

  trackById(index:number, item: any) {
    return item.id;
  }
}
