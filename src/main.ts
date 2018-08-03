import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';


import 'rxjs/add/operator/take'
import 'rxjs/add/operator/debounce'
import 'rxjs/add/operator/buffer'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/fromEvent'



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
