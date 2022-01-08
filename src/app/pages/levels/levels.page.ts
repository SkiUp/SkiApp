import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from 'src/app/providers/entities/Level';
import { LevelService } from 'src/app/providers/level.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {
  levels: Observable<Level[]>;
  constructor(private _levelService: LevelService) {}

  ngOnInit() {
    this.levels = this._levelService.getLevels();
  }
}
