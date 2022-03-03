import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  ShellComponent,
  SideBarComponent,
} from './components';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, SideBarComponent],
  imports: [CommonModule, IonicModule, RouterModule, AuthModule],
})
export class CoreModule {}
