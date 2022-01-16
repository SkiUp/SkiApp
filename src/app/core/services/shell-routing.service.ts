import { Route } from '@angular/router';

import { ShellComponent } from '@core/components';
import { InternalRoutes } from '@core/models';

export class ShellRoutingService {
  static childRoutes(routes: InternalRoutes): Route {
    return {
      path: '',
      component: ShellComponent,
      canActivate: [],
      canActivateChild: [],
      resolve: {},
      children: routes,
      data: { reuse: true },
    };
  }
}
