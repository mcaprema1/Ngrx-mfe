import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { categoryReducer, moviesReducer } from '@ngrx-mfe/data-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MoviesComponent],
  imports: [BrowserModule,
    StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}
    ),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
     } ) : [],],
  providers: [],
  // exports :[MoviesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
