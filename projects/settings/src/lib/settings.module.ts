import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SettingsComponent }]),
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {
}
