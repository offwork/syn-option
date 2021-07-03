import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mainContentAnimation } from './shared/animation/animation';

@Component({
  selector: 'syn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    mainContentAnimation(),
  ]
})
export class AppComponent {
  title = 'Syn Option – Stock Market';
  color = 'primary';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  redirectUrl: string | any[] = ['/'];
  tooltip = 'Syn Option';

  _sidebarStatus = new BehaviorSubject<string>('open');
  sidebarStatus$ = this._sidebarStatus.asObservable();

  toggleMenu(event: string) {
    this._sidebarStatus.next(event);
  }
}
