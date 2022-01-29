import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QueryArrayFilterDto, QueryOperators } from '@core/models/DTO';
import { LevelDto, LevelService } from '@features/levels';
import { SearchEvent } from '@shared/search-bar';
import { tap } from 'rxjs/operators';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-levels',
  templateUrl: './levels-list.page.html',
  styleUrls: ['./levels-list.page.scss'],
})
export class LevelsListPage implements OnInit {
  public levels$: Observable<LevelDto[]>;
  public loading = true;

  private _searchCriteria: SearchEvent;

  constructor(private _levelService: LevelService) {}

  ngOnInit() {
    this.loadData();
  }

  public search(event: SearchEvent) {
    this._searchCriteria = event;
    this.loadData();
  }

  public loadData(event?: unknown) {
    this.loading = true;
    const filters: QueryArrayFilterDto<unknown>[] = [];
    if (this._searchCriteria?.searchTerm) {
      filters.push({
        filterType: 'array',
        queryOperator: QueryOperators.LIKE,
        value: [this._searchCriteria?.searchTerm],
        propertyName: 'name',
      });
    }
    this.levels$ = this._levelService.getLevels({ filters });
    this.levels$.subscribe({
      next: () => {
        this.loading = false;
        if (event) {
          (event as RefresherCustomEvent).target.complete();
        }
      },
    });
  }
}
