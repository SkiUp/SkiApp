import { Component, Input } from '@angular/core';
import { ExerciseDto } from '@features/exercises/models';

@Component({
  selector: 'app-exercise-pod',
  templateUrl: './exercise-pod.component.html',
  styleUrls: ['./exercise-pod.component.scss'],
})
export class ExercisePodComponent {
  @Input() exercise: ExerciseDto;
}
