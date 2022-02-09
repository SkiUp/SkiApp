import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { objectToQueryParams } from '@shared/utils';
import { LevelDto, LevelsQueryDto } from '@features/levels/models';
import { Observable } from 'rxjs';
import { environment } from '@enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  constructor(private _httpClient: HttpClient) {}

  public getLevels(queryDto: LevelsQueryDto): Observable<LevelDto[]> {
    return this._httpClient.get<LevelDto[]>(`${environment.apiUrl}/levels`, {
      params: objectToQueryParams(queryDto),
    });
  }

  public getLevel(id: string): Observable<LevelDto> {
    return this._httpClient.get<LevelDto>(`${environment.apiUrl}/levels/${id}`);
  }

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
