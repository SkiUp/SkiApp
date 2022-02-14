import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared/shared.module';

import {
  ExercisesListComponent,
  ExerciseTypeComponent,
  ExercisePodComponent,
} from '@features/exercises/components';
import { NgxPopperjsModule } from 'ngx-popperjs';

const components = [
  ExercisesListComponent,
  ExerciseTypeComponent,
  ExercisePodComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    HttpClientModule,
    NgxPopperjsModule,
    IonicModule,
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [...components],
})
export class ExercisesModule {}
