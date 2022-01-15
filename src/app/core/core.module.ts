import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  ShellComponent,
  SideBarComponent,
} from './components';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, SideBarComponent],
  imports: [CommonModule, IonicModule],
})
export class CoreModule {}
