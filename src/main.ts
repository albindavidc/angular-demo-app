import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
}).catch((err) => console.error(err));


