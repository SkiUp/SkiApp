import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared/shared.module';
import { LevelsModule } from '@features/levels';
import { ExercisesModule } from '@features/exercises';
import { LevelsPageRoutingModule } from '@pages/theory/theory-routing.module';
import { LevelsListPage } from '@pages/theory/levels-list/levels-list.page';
import { LevelPage } from '.';

@NgModule({
  imports: [
    LevelsModule,ExercisesModule,
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    LevelsPageRoutingModule,
  ],
  declarations: [LevelsListPage, LevelPage],
})
export class TheoryPagesModule {}
