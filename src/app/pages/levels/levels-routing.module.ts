import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelInfoComponent } from 'src/app/components';

import { LevelsPage } from './levels.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsPage,
  },
  {
    path: ':id',
    component: LevelInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsPageRoutingModule {}
