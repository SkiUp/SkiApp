import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExericesPage } from './exerices.page';

const routes: Routes = [
  {
    path: '',
    component: ExericesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExericesPageRoutingModule {}
