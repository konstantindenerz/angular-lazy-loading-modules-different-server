import {Component} from '@angular/core';
import {Context} from '@labs/common';

@Component({
  selector: 'labs-reporting',
  templateUrl: 'reporting.component.html',
  styleUrls: ['reporting.component.scss'],
})
export class ReportingComponent {
  constructor(readonly context: Context) {
  }
}
