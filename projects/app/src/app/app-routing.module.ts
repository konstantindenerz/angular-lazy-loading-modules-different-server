import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent, MainLayoutComponent} from '@labs/common';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'reporting',
        loadChildren: () => import('projects/reporting/src/lib/reporting.module').then((m) => m.ReportingModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
