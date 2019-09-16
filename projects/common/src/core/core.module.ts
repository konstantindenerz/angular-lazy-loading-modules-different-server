import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ALL_COMPONENTS} from './components/all.components';
import {CORE_ROUTES} from './core.routes';

@NgModule({
  declarations: [...ALL_COMPONENTS],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(CORE_ROUTES)],
  exports: [...ALL_COMPONENTS],
})
export class CoreModule {
}
