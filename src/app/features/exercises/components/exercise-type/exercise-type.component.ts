import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-type',
  templateUrl: './exercise-type.component.html',
  styleUrls: ['./exercise-type.component.scss'],
})
export class ExerciseTypeComponent {
  public get value(): string {
    return 'MB';
  }
}
