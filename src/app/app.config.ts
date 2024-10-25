import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { loadersInterceptor } from './loaders.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({
    eventCoalescing: true
  }),
  provideRouter(routes),
  provideHttpClient(withInterceptors([loadersInterceptor])),
  provideAnimations(),
    MessageService
  ]
};
