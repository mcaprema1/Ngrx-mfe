
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
// import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ContainerComponent } from '../container/container.component';
import { CategoryComponent } from './../category/category.component';
import { LoaderDirective } from '../loader.directive';
import { categoryReducer, moviesReducer } from '@ngrx-mfe/data-store';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ContainerComponent, CategoryComponent,
    LoaderDirective],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}),
      // {
      //   metaReducers: [],
      //   runtimeChecks: {
      //     strictActionImmutability: true,
      //     strictStateImmutability: true,
      //   },
      // }
      !environment.production ? StoreDevtoolsModule.instrument() : [],
    // ),
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
