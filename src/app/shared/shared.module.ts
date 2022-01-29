import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '@shared/search-bar';
import { IonicModule } from '@ionic/angular';
import { SlopeTypeComponent } from './components/slope-type/slope-type.component';

const components = [SearchBarComponent, SlopeTypeComponent];

@NgModule({
  declarations: [...components],
  imports: [IonicModule, CommonModule],
  exports: [...components],
})
export class SharedModule {}
