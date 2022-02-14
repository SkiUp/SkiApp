import { Component, EventEmitter, Output } from '@angular/core';
import { SearchEvent } from '@shared/search-bar';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<SearchEvent>();

  public search(event) {
    this.searchEvent.emit({
      searchTerm: event.detail.value,
    });
  }
}
