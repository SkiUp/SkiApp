import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LevelsListComponent } from '@features/levels/components';
import { SharedModule } from '@shared/shared.module';

import { LevelsPageRoutingModule } from './theory-routing.module';
import { LevelsListPage } from './levels-list/levels-list.page';
import { LevelPage } from './level/level.page';
import { ExercisePage } from './exercise/exercise.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    LevelsPageRoutingModule,
  ],
  declarations: [LevelsListPage, LevelPage, ExercisePage, LevelsListComponent],
})
export class TheoryPagesModule {}
