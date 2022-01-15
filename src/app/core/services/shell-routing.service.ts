import { Routes, Route } from '@angular/router';

import { ShellComponent } from '@core/components';

export class ShellRoutingService {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      canActivate: [],
      canActivateChild: [],
      resolve: {},
      children: routes,
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
}
