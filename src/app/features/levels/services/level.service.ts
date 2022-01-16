import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { objectToQueryParams } from '@shared/utils';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  constructor(private _httpClient: HttpClient) {}

  public getLevels(queryDto: LevelsQueryDto) {
    console.log(queryDto);
    console.log(objectToQueryParams(queryDto));
    return this._httpClient.get<LevelDto[]>('http://localhost:3000/levels', {
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

export class LevelDto {
  id: string;
  name: string;
  description?: string;
  priorLevelId?: string;
  exercises: unknown[];
}

export class LevelsQueryDto {
  className? = 'level';
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
