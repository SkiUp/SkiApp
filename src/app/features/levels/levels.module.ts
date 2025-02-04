import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LevelService } from '@features/levels/services';
import { LevelsListComponent } from '@features/levels/components';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const components = [LevelsListComponent];
const services = [LevelService];

@NgModule({
  declarations: [...components],
  imports: [HttpClientModule, IonicModule, CommonModule, RouterModule],
  providers: [...services],
  exports: [...components],
})
export class LevelsModule {}
