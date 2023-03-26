import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DataService,
  getCategories,
  setSelectedCategory,
} from '@ngrx-mfe/data-store';

@Component({
  selector: 'ngrx-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe-employees';
  constructor(private readonly store: Store, private dataService: DataService) {
    const categories = this.dataService.getCategories();
    this.store.dispatch(getCategories({ categories }));
    if (categories?.length) {
      this.store.dispatch(setSelectedCategory({ position: 0 }));
    }
  }
}
