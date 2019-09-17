import {Injector, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ModuleService} from '@labs/common';
import {AdminComponent} from './components/admin.component';
import {Context} from './models/context';

const components = { 'labs-admin': AdminComponent };

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [AdminComponent],
})
export class AdminModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    ModuleService.activate(components, this.injector, Context);
  }
}
