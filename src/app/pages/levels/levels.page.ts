import { Component, OnInit } from '@angular/core';
import {
  LevelDto,
  LevelService,
  QueryArrayFilter,
  QueryOperators,
} from '@app/features/levels';
import { SearchEvent } from '@app/shared/search-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {
  public levels$: Observable<LevelDto[]>;

  private _searchCriteria: SearchEvent;

  constructor(private _levelService: LevelService) {
    console.log('levels page');
  }

  ngOnInit() {
    this.loadData();
  }

  public search(event: SearchEvent) {
    this._searchCriteria = event;
    this.loadData();
  }

  public loadData() {
    const filters: QueryArrayFilter<unknown>[] = [];
    if (this._searchCriteria?.searchTerm) {
      filters.push({
        filterType: 'array',
        queryOperator: QueryOperators.LIKE,
        value: [this._searchCriteria?.searchTerm],
        propertyName: 'name',
      });
    }
    this.levels$ = this._levelService.getLevels({
      filters,
    });
  }
}
