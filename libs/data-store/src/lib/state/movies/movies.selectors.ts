import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { cloneDeep, isEmpty } from 'lodash-es';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { categories, movies } from '../../app.interface';
import { CategoryState } from '../category/category.reducer';
import { Movie } from './movies.models';
import { MovieState } from './movies.reducer';

export const selectMovies = createFeatureSelector<MovieState>(movies);
const selectCategories =
  createFeatureSelector<CategoryState>(categories);

export const moviesSelector = createSelector(
  selectMovies,
  selectCategories,
  (movieStates, categories) => {
    const selectedMovies: Movie[][] = [];
    console.log("fff : ", movieStates, categories);
    
    console.log("movieStates.allMovies :", movieStates.allMovies, categories.selectedCategory)
    if (isEmpty(movieStates.allMovies)) {
      console.log("mov reducer selectedMovies : ", selectedMovies);
      return selectedMovies;
    }
    const movies = cloneDeep(
      movieStates.allMovies[categories.selectedCategory?.name]
    );
    console.log("mov ffff reducer selectedMovies : ", movies);
    while (movies.length) selectedMovies.push(movies.splice(0, 3));

    return selectedMovies;
  }
);

export const filteredMovieSelector = pipe(
  select(moviesSelector),
  filter((item) => !!item?.length)
);
