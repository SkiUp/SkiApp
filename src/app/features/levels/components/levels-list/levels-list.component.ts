import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LevelDto, QueryOperators } from '@features/levels';
import { ExerciseService } from '@app/features/exercises/services/level.service';

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss'],
})
export class LevelsListComponent implements OnInit {
  @Input() levels$: Observable<LevelDto[]>;
  constructor(private _exercisesService: ExerciseService) {}

  ngOnInit() {}

  public getExercises(level: LevelDto) {
    this._exercisesService
      .getExercises({
        filters: [
          {
            filterType: 'array',
            propertyName: 'levelId',
            queryOperator: QueryOperators.IN,
            value: ['f3b2927e-26fb-4e09-ad73-487abb8caef6'],
          },
        ],
      })
      .subscribe({ next: console.log });
  }
}
