import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared/shared.module';
import { LevelsModule } from '@features/levels';
import { ExercisesModule } from '@features/exercises';
import { LevelsPageRoutingModule } from '@pages/theory/theory-routing.module';
import { ExercisePage } from '@pages/theory/exercise/exercise.page';
import { LevelsListPage } from '@pages/theory/levels-list/levels-list.page';
import { LevelPage } from '.';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    LevelsModule,
    ExercisesModule,
    LevelsPageRoutingModule,
  ],
  declarations: [ExercisePage, LevelsListPage, LevelPage],
})
export class TheoryPagesModule {}
