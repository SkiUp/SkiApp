import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { LevelDto } from '@features/levels';

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss'],
})
export class LevelsListComponent {
  @Input() levels$: Observable<LevelDto[]>;
  @Input() loading = true;
}
