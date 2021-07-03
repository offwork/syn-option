import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'syn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() logo!: string;
  @Input() color!: string;
  @Input() title!: string;
  @Input() tooltip!: string;
  @Input() redirectUrl: string | any[] = '/';
  @Output() clicked = new EventEmitter<string>();

  _sidenavToggle = true;
  
  toggleMenu() {
    this._sidenavToggle = !this._sidenavToggle;
    const mode = this._sidenavToggle ? 'open' : 'close';
    this.clicked.emit(mode);
  }

  ngOnInit() {
    if (!this.logo) {
      this.logo = './assets/logo.png';
    }
  }
}
