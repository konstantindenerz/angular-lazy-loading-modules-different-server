import {Component} from '@angular/core';
import {Context} from '@labs/common';

@Component({
  selector: 'labs-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss'],
})
export class SettingsComponent {
  constructor(readonly context: Context) {
  }
}
