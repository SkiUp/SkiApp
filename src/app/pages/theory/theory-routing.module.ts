import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelPage } from '.';
import { ExercisePage } from './exercise/exercise.page';

import { LevelsListPage } from './levels-list/levels-list.page';

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
