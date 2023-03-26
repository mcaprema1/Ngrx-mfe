import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DataService,
  categoriesSelector,
  currentCategorySelector,
  getCategories,
  setSelectedCategory,
  Category,
} from '@ngrx-mfe/data-store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories$!: Observable<Category[]>;
  selectedCategory$!: Observable<Category>;

  constructor(private dataService: DataService, private readonly store: Store) {
    this.categories$ = this.store.select(categoriesSelector);
    this.selectedCategory$ = this.store.select(currentCategorySelector);
    console.log("this.categories$  : ", this.categories$ );
    
  }

  ngOnInit(): void {
    const categories = this.dataService.getCategories();
    console.log(" categories componetn: ", categories);
    
    this.store.dispatch(getCategories({ categories }));
    if (categories?.length) {
      this.store.dispatch(setSelectedCategory({ position: 0 }));
    }
  }

  showDetails(index: number) {
    this.store.dispatch(setSelectedCategory({ position: index }));
  }
}
