import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExericesPageRoutingModule } from './exerices-routing.module';

import { ExericesPage } from './exerices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExericesPageRoutingModule
  ],
  declarations: [ExericesPage]
})
export class ExericesPageModule {}
