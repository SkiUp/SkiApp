import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title = 'Header';

  constructor(private _router: Router, private _route: ActivatedRoute) {
    //  console.log(this._route.snapshot);
    // this._route.data.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    // });
    // this._router.events
    //   .pipe(filter((evt) => evt instanceof NavigationEnd))
    //   .subscribe((event) => {
    //     console.log('event.url', event['url']);
    //     console.log('event', event);
    //     console.log('route', this._route);
    //   });
    // console.log(this._route.routeConfig.children);
    // console.log('routeconfig',this._route.routeConfig);
    // console.log('first', this._route.firstChild);
    // this._route.data.subscribe({ next: (data) => console.log('data', data) });
  }
}
