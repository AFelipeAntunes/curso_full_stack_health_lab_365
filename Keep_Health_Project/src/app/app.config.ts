import { ApplicationConfig } from '@angular/core';
import { provideRoutes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRoutes(routes), provideClientHydration()]
};
