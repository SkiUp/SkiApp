import { Component, Input } from '@angular/core';
import { ExerciseTypes } from '@app/core';

@Component({
  selector: 'app-exercise-type',
  templateUrl: './exercise-type.component.html',
  styleUrls: ['./exercise-type.component.scss'],
})
export class ExerciseTypeComponent {
  @Input() exerciseType: ExerciseTypes

  public get value(): string {
    return this.exerciseType?.toString();
  }
}
