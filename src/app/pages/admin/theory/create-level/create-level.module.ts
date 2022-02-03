import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLevelPageRoutingModule } from './create-level-routing.module';

import { CreateLevelPage } from './create-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateLevelPageRoutingModule
  ],
  declarations: [CreateLevelPage]
})
export class CreateLevelPageModule {}
