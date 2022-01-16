import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LevelDto } from '@features/levels';

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss'],
})
export class LevelsListComponent implements OnInit {
  @Input() levels$: Observable<LevelDto[]>;
  constructor() {}

  ngOnInit() {}
}
