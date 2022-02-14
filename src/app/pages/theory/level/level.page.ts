import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseTypes } from '@app/core';
import { QueryOperators } from '@core/models';
import { ExerciseDto, ExerciseService } from '@features/exercises';
import { LevelDto, LevelService } from '@features/levels';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {
  public level$: Observable<LevelDto>;
  public exercises$: Observable<ExerciseDto[]>;

  public levelLoading = true;
  public exercisesLoading = true;

  constructor(
    private _route: ActivatedRoute,
    private _levelService: LevelService,
    private _exerciseService: ExerciseService
  ) {}

  ngOnInit() {
    this.level$ = this._levelService
      .getLevel(this._route.snapshot.params.id)
      .pipe(
        tap(() => {
          this.levelLoading = false;
        })
      );

    this.exercises$ = this._exerciseService
      .getExercises({
        filters: [
          {
            filterType: 'array',
            queryOperator: QueryOperators.EQUAL,
            value: [this._route.snapshot.params.id],
            propertyName: 'levelId',
          },
        ],
      })
      .pipe(
        map((exercises) => {
          const MB = exercises.filter(
            (exercise) => exercise.type === ExerciseTypes.MANEUVRE_DE_BASE
          );
          const HB = exercises.filter(
            (exercise) => exercise.type === ExerciseTypes.HABILITEE
          );
          const EX = exercises.filter(
            (exercise) => exercise.type === ExerciseTypes.EXERCICE
          );
          return [...MB, ...HB, ...EX];
        }),
        tap(() => {
          this.exercisesLoading = false;
        })
      );
  }
}
