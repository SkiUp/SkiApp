import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ExercisesListComponent } from './components/exercises-list/exercises-list.component';

const components = [ExercisesListComponent];

@NgModule({
  declarations: [...components],
  imports: [HttpClientModule, IonicModule, CommonModule, RouterModule],
  exports: [...components],
})
export class ExercisesModule {}
