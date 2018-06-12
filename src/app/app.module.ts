import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import localeEn from '@angular/common/locales/en'
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { RouterModule, PreloadAllModules } from '@angular/router';
//import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Observable } from "rxjs";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// import { reducers } from './components/movie/reducers'; 
import { reducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppConfig }       from './app.config';
import { HttpContract }       from './contracts/http.contract';
/* import * as b from 'ngx-bootstrap'; */
import { ShareModule }       from './components/share/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {preloadingStrategy: PreloadAllModules}
    ),
    
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, 
    }),
    ShareModule

  ],
  providers: [
    AppConfig,
    HttpContract,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
