import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { categoryReducer, moviesReducer } from '@ngrx-mfe/data-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app.routing.module';
import { RemoteCounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
    // RouterModule.forRoot([{
      // path: '', 
      // component: MoviesComponent
    // }])  ,
    // AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: RemoteCounterComponent }], {
      useHash: true,
    }),
    StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}
    ),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
     } ) : [],],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
