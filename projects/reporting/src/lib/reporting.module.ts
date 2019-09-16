import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReportingComponent} from './reporting.component';

@NgModule({
  declarations: [ReportingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReportingComponent }]),
  ],
  exports: [ReportingComponent],
})
export class ReportingModule {
}
