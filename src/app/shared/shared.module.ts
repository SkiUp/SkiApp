import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgxPopperjsModule } from 'ngx-popperjs';

import { SearchBarComponent } from '@shared/search-bar';
import { SlopeTypeComponent } from './components/slope-type/slope-type.component';

const components = [SearchBarComponent, SlopeTypeComponent];

@NgModule({
  declarations: [...components],
  imports: [IonicModule, NgxPopperjsModule, CommonModule],
  exports: [...components],
})
export class SharedModule {}
