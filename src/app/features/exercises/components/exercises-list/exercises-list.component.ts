import { Component, Input } from '@angular/core';

import { ExerciseDto } from '@features/exercises/models';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss'],
})
export class ExercisesListComponent {
  // todo reorder to  mb, hb, ex
  @Input() exercises: ExerciseDto[];
  @Input() loading = true;
}
