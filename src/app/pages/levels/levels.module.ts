import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LevelsListComponent } from '@features/levels/components';
import { SharedModule } from '@shared/shared.module';

import { LevelsPageRoutingModule } from './levels-routing.module';
import { LevelsPage } from './levels.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    LevelsPageRoutingModule,
  ],
  declarations: [LevelsPage, LevelsListComponent],
})
export class LevelsPageModule {}
