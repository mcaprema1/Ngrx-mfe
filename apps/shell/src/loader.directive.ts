import { Directive, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { DynamicLoader } from './dynamic-loader.service';

@Directive({
  selector: '[appModuleFedLoader]',
})
export class LoaderDirective implements OnChanges {
  @Input() public appModuleFedLoader!: {
    path: string;
    name: string;
    component: string;
  };
  constructor(
    public viewContainerRef: ViewContainerRef,
    private loader: DynamicLoader
  ) {}
  ngOnChanges(): void {
    console.log("loader directive : ", this.viewContainerRef, this.appModuleFedLoader);
    this.loader.loadComponent(this.viewContainerRef, this.appModuleFedLoader);

  }
}
