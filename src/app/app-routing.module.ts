import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { InternalRoutes } from '@core/models';
import { ShellRoutingService } from '@core/services';
import { LevelService, LevelsModule } from '@features/levels';

const routes: InternalRoutes = [
  {
    path: 'auth',
    redirectTo: 'levels',
    pathMatch: 'full',
  },
  ShellRoutingService.childRoutes([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      data: {
        headerConfig: {
          title: 'Home',
        },
      },
      sideBarConfig: {
        label: 'Home',
        path: '/home',
      },
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomePageModule),
    },
    {
      path: 'levels',
      data: {
        headerConfig: {
          title: 'Levels',
        },
      },
      sideBarConfig: {
        label: 'Levels',
        path: '/levels',
      },
      loadChildren: () =>
        import('./pages/theory/theory.module').then((m) => m.TheoryPagesModule),
    },
  ]),
  {
    path: '*',
    redirectTo: 'levels',
  },
  {
    path: 'admin',
    children: [
      {
        path: 'theory',
        children: [
          {
            path: 'create-level',
            loadChildren: () =>
              import(
                './pages/admin/theory/create-level/create-level.module'
              ).then((m) => m.CreateLevelPageModule),
          },
          {
            path: 'create-exercise',
            loadChildren: () =>
              import(
                './pages/admin/theory/create-exercise/create-exercise.module'
              ).then((m) => m.CreateExercisePageModule),
          },
          {
            path: 'create-movement',
            loadChildren: () =>
              import(
                './pages/admin/theory/create-movement/create-movement.module'
              ).then((m) => m.CreateMovementPageModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      paramsInheritanceStrategy: 'always',
    }),
    LevelsModule,
  ],
  exports: [RouterModule],
  providers: [LevelService],
})
export class AppRoutingModule {}
