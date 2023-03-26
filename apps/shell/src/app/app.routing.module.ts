import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// const routes: Routes = [
//     { path: 'adder', component: CounterComponent },
// {
//     path: 'remote',
//     loadChildren: () => import('mfeEmployees/RemoteModule').then((m) => m.CounterRoutingModule),
//   },
//   { path: '', redirectTo: '/adder', pathMatch: 'full' },

// ];
// @NgModule({
//     imports: [
//         CommonModule,
//     FormsModule,
//     RouterModule.forRoot(routes, { useHash: true }), ],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }
  
const routes = [
  { path: 'adder', component: CounterComponent },
  {
    path: 'remote',
    loadChildren: () => import('mfe-employees/RemoteModule').then((m) => m.CounterRoutingModule),
  },
  // { path: '', redirectTo: '/adder', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}