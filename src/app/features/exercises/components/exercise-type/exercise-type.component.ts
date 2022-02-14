import { Component, Input } from '@angular/core';

import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

import { ExerciseTypes } from '@app/core';

@Component({
  selector: 'app-exercise-type',
  templateUrl: './exercise-type.component.html',
  styleUrls: ['./exercise-type.component.scss'],
})
export class ExerciseTypeComponent {
  @Input() exerciseType: ExerciseTypes;

  public NgxPopperjsPlacements = NgxPopperjsPlacements;
  public NgxPopperjsTriggers = NgxPopperjsTriggers;

  public get value(): string {
    return this.exerciseType?.toString();
  }
}
