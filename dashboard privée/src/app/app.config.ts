import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'; 


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule, 
      ToastrModule.forRoot(),
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
      })
    ),
    provideAnimationsAsync()
  ]
};
