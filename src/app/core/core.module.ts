import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  ShellComponent,
  SideBarComponent,
} from './components';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, SideBarComponent],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class CoreModule {}
