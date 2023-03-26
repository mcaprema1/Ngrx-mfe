import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'ngrx-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
constructor(public router : Router){

}
  navigate(){
    // this.router.navigateByUrl['remote']
  }
}
