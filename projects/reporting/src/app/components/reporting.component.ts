import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Context} from '../models/context';

@Component({
  selector: 'labs-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['reporting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportingComponent {
  constructor(readonly context: Context) {
  }
}
