import { HttpInterceptorFn } from '@angular/common/http';
const API_ORIGIN = 'http://localhost:3000';

export const correlationIdInterceptor: HttpInterceptorFn  = (req: any, next: any) => {
  let url: URL;

  try {
    url = new URL(req.url);
  } catch {
    return next(req)
  }

  if (url.origin !== API_ORIGIN) {
    return next(req);
  }

  const correlationId =
    req.headers.get('X-Correlation-Id') || crypto.randomUUID();

  const updatedRequest = req.clone({
    setHeaders: {
      'X-Correlation-Id': correlationId,
    },
  });

  return next(updatedRequest)
}
