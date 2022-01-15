import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '@shared/search-bar';
import { IonicModule } from '@ionic/angular';

const components = [SearchBarComponent];

@NgModule({
  declarations: [...components],
  imports: [IonicModule, CommonModule],
  exports: [...components],
})
export class SharedModule {}
