import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelsPageModule } from '../levels/levels.module';

import { EvalPage } from './eval.page';

const routes: Routes = [
  {
    path: '',
    component: EvalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LevelsPageModule],
  exports: [RouterModule],
})
export class EvalPageRoutingModule {}
