import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Levels', url: '/levels', icon: 'list' },
    { title: 'Evaluations', url: '/eval', icon: 'clipboard' },
    { title: 'Search', url: '/folder/Archived', icon: 'search' },
  ];

  constructor() {}
}
