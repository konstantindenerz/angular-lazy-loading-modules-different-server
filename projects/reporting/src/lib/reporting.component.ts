import {Component} from '@angular/core';
import {Context} from '@labs/common';

@Component({
  selector: 'labs-reporting',
  template: `
    <p>
      reporting works! (lazy loaded module)
      {{context | json}}
    </p>
  `,
})
export class ReportingComponent {
  constructor(readonly context: Context) {
  }
}
