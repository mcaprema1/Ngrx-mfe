// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';

// import { loadRemoteModule } from '@angular-architects/module-federation';
// import { environment } from '../environments/environment';

// const routes: Routes = [

// {
//     path: 'mfe-employees',
//     loadChildren: () =>
//       loadRemoteModule({
//         remoteEntry: 'localhost://8000/remoteEntry.js',
//         remoteName: 'mfe-employees',
//         exposedModule: './MoviesComponent',
//       }).then((m) => m.SendModule),
//   }
// ]
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }