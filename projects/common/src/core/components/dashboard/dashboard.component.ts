import {Component} from '@angular/core';
import {Context} from '../../services/context';

@Component({
  selector: 'labs-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(readonly context: Context) {

  }
}
