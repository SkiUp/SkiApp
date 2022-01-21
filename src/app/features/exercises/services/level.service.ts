import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { objectToQueryParams } from '@shared/utils';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private _httpClient: HttpClient) {}

  public getExercises(queryDto: ExercisesQueryDto) {
    console.log(queryDto);
    console.log(objectToQueryParams(queryDto));
    return this._httpClient.get<ExerciseDto[]>('http://localhost:3000/exercises', {
      params: objectToQueryParams(queryDto),
    });
  }

  // public getLevel(id: number): Observable<LevelDto> {
  //   this._httpClient.get<LevelDto>(`/levels/${id}`);
  // }

  // public createLevel(level: LevelDto): Observable<LevelDto> {
  //   this._httpClient.post<LevelDto>('/levels', level);
  // }

  // public updateLevel(level: LevelDto): Observable<LevelDto> {
  //   this._httpClient.patch<LevelDto>(`/levels/${level.id}`, level);
  // }

  // public deleteLevel(id: number): Observable<LevelDto> {
  //   this._httpClient.delete<LevelDto>(`/levels/${id}`);
  //  }
}

export class ExerciseDto {
  id: string;
  description: string;
  slopeType: unknown;
  type: unknown;
  level: unknown;
  mouvement: unknown;
  isOfficial: boolean;
  asset: unknown;
}

export class ExercisesQueryDto {
  className? = 'exercise';
  filters?: QueryArrayFilter<unknown>[];
}
export class QueryFilter {
  public filterType: 'array' | 'property' | 'object';
  public propertyName: string;
}
export enum QueryOperators {
  IN = 'IN',
  EQUAL = '=',
  NOT_EQUAL = '!=',
  GREATER_THAN = '>',
  GREATER_THAN_OR_EQUAL = '>=',
  LESS_THAN = '<',
  LESS_THAN_OR_EQUAL = '<=',
  NOT_IN = 'NOT IN',
  LIKE = 'LIKE',
  NOT_LIKE = 'NOT LIKE',
}

export class QueryArrayFilter<T> extends QueryFilter {
  public filterType: 'array';
  public value: T[];
  public queryOperator: QueryOperators;
}
