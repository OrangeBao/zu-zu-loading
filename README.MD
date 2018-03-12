# zu-loading

## Installation

To install this library, run:

```bash
$ npm install zu-loading --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install zu-loading
```

and then from your Angular `AppModule`:

```typescript
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

```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<zu-loading><ng-template #customLoading><span>123</span></ng-template></zu-loading><button (click)="showLoading()">show loading</button>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [baoyinghai](mailto:245382441@qq.com)
