
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
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppRoutingModule } from './app.routing.module';
import { CounterComponent } from './counter/counter.component';
import * as counterReducer from './counter/counter.reducers';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ContainerComponent, CategoryComponent,
    LoaderDirective, CounterComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    
    RouterModule.forRoot([
      {
        path: '',
        loadChildren:()=> import('mfe-employees/RemoteModule').then(m => {return m.AppModule}), 
        // loadChildren: () => loadRemoteModule({
        //   remoteEntry: 'http://localhost:8000/remoteEntry.js',
        //   remoteName: 'mfe-employees',
        //   exposedModule: './AppModule',
        // }).then(m => m.AppModule)
      }
    ]),
    // RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer, counter: counterReducer.reducer },
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
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
