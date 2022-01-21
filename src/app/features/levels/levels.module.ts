import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseService } from '../exercises/services/level.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule],
  providers: [ExerciseService],
})
export class LevelsModule {}
