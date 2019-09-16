import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MenuComponent} from './components/menu/menu.component';

@NgModule({
  declarations: [DashboardComponent, MenuComponent],
  imports: [],
  exports: [DashboardComponent, MenuComponent],
})
export class CoreModule {
}
