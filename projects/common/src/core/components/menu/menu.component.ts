import {Component, Input} from '@angular/core';

@Component({
  selector: 'labs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input()
  items: {url: string, name: string, icon: string}[];
}
