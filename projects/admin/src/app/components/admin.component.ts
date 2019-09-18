import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Context} from '../models/context';

@Component({
  selector: 'labs-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  constructor(readonly context: Context) {
  }
}
