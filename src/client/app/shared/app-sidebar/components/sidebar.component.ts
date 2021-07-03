import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { sidebarAnimation, iconAnimation, labelAnimation } from '../../animation/animation';

@Component({
  selector: 'syn-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    sidebarAnimation(),
    iconAnimation(),
    labelAnimation(),
  ]
})
export class SidebarComponent {
  @Input() sidebarStatus!: Observable<string>;
}
