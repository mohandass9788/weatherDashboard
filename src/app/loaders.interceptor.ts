import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './service/loader.service';

export const loadersInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService); // Inject the service

  loaderService.show(); // Show loader when request starts
  return next(req).pipe(
    finalize(() => loaderService.hide()) // Hide loader when request completes (both success and error)
  );
};