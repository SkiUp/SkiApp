import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelPage } from '@pages/theory/level/level.page';
import { ExercisePage } from '@pages/theory/exercise/exercise.page';
import { LevelsListPage } from '@pages/theory/levels-list/levels-list.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsListPage,
  },
  {
    path: ':id',
    component: LevelPage,
  },
  {
    path: ':id/exercises',
    component: ExercisePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsPageRoutingModule {}
