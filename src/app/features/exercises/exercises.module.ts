import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared/shared.module';

import {
  ExercisesListComponent,
  ExerciseTypeComponent,
} from '@features/exercises/components';

const components = [ExercisesListComponent, ExerciseTypeComponent];

@NgModule({
  declarations: [...components],
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [...components],
})
export class ExercisesModule {}
