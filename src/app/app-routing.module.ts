import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShellRoutingService } from './core/services/shell-routing.service';

const routes: Routes = [
  {
    path: 'auth',
    redirectTo: 'levels',
    pathMatch: 'full',
  },
  ShellRoutingService.childRoutes([
    {
      path: 'levels',
      loadChildren: () =>
        import('./pages/levels/levels.module').then((m) => m.LevelsPageModule),
    },
  ]),
  {
    path: '*',
    redirectTo: 'levels',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
