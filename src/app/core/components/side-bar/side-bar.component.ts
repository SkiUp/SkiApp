import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternalRoute, SideBarItem } from '@core/models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public routes: SideBarItem[];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.routes = this._route.routeConfig.children
      .filter((route: InternalRoute) => !!route.path && !!route.sideBarConfig)
      .map((route: InternalRoute) => route.sideBarConfig);
  }
}
