import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ReportingModule} from './app/reporting.module';

import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ReportingModule, { ngZone: 'noop' })
  .catch(err => console.error(err));
