import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, forwardRef, Inject, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

// storage
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

// http
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';

// wko.beer services
import { HttpErrorHandler } from './http-error-handler.service';
import { EmitterService } from './emitter.service';
import { AuthService } from './auth/auth.service';
import { BeersService } from './beers.service';
import { WindowRef } from './window-ref.service';

// wko.beer components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BeersComponent } from './beers/beers.component';
import { BrewsComponent } from './brews/brews.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BeersComponent,
    BrewsComponent,
    RecipesComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AsyncLocalStorageModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    EmitterService,
    HttpErrorHandler,
    AuthInterceptor,
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
    AuthService,
    BeersService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
