import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Level } from './entities/Level';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  constructor(private _httpClient: HttpClient) {}

  public getLevels() {
    return this._httpClient.get<Level[]>(environment.backend.api + '/levels');
  }
}
