/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoadingModule, LoadingService }  from 'zu-loading';

@Component({
  selector: 'app',
  template: `<zu-loading><ng-template #customLoading><span>123</span></ng-template></zu-loading><button (click)="showLoading()">show loading</button>`
})
class AppComponent {
  constructor(private loadingService: LoadingService){
  
  }

  showLoading() {
    this.loadingService.show();
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, LoadingModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
