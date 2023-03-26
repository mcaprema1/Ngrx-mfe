import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicLoader {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public loadComponent(
    viewContainerRef: ViewContainerRef,
    appDetail: {
      path: string;
      name: string;
      component: string;
    }
  ) {
    const cdnUrl = 'http://localhost:8000';
    if (!appDetail) return;
    console.log("appDetails : ", appDetail, `${cdnUrl}${appDetail.path}`);
    
    loadRemoteModule({
      // remoteEntry: `${cdnUrl}${appDetail.path}`,
      // remoteName: appDetail.name,
      // exposedModule: `./${appDetail.component}`,
      remoteEntry: 'http://localhost:8000',
      remoteName: appDetail.name,
      exposedModule: `./${appDetail.component}`,
    }).then((m) => {
      console.log("nm : ", m);
      
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          m[appDetail.component]
        );
        console.log("componentFactory : ", componentFactory, appDetail);
        
      viewContainerRef.clear();
      // viewContainerRef.createComponent(componentFactory);
      viewContainerRef.createComponent(componentFactory);
    });
  }
}
