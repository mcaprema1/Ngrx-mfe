// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';

// import { loadRemoteModule } from '@angular-architects/module-federation';
// import { environment } from '../environments/environment';
// import { MoviesComponent } from './movies/movies.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// const routes: Routes = [

// {
//     path: 'multiply',
//     component : MoviesComponent
//     // loadChildren: () =>
//     //   loadRemoteModule({
//     //     remoteEntry: 'localhost://8000/remoteEntry.js',
//     //     remoteName: 'mfe-employees',
//     //     exposedModule: './MoviesComponent',
//     //   }).then((m) => m.SendModule),
//   }
// ]
// @NgModule({
//   declarations : [MoviesComponent],
//     imports: [
//       FormsModule,
//       CommonModule,
//       RouterModule.forRoot(routes)],
//     // exports: [RouterModule]
//   })
//   export class AppRoutingModule { }