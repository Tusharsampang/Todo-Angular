import { CanActivateFn } from '@angular/router';

export const authguradGuard: CanActivateFn = (route, state) => {
  return true;
};
