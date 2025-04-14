import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // Vérifie que c’est bien ici que tu le stockes

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
