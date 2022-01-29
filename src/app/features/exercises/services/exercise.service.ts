import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { objectToQueryParams } from '@shared/utils';
import { ExerciseDto, ExercisesQueryDto } from '@features/exercises/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private _httpClient: HttpClient) {}

  public getExercises(queryDto: ExercisesQueryDto): Observable<ExerciseDto[]> {
    return this._httpClient.get<ExerciseDto[]>(
      'http://localhost:3000/exercises',
      {
        params: objectToQueryParams(queryDto),
      }
    );
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
