import {Injector, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ModuleService} from '@labs/common';
import {ReportingComponent} from './components/reporting.component';
import {Context} from './models/context';

const components = {
  'labs-reporting': ReportingComponent,
};

@NgModule({
  declarations: [
    ReportingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [ReportingComponent],
})
export class ReportingModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    ModuleService.activate(components, this.injector, Context);
  }
}
