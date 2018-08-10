import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, forwardRef, Inject, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// http
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';

// Material Design
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';

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
import { Autofocus } from './auto-focus.directive';
import { WkoApi } from './wko-api.service';
import { BrewCreationComponent } from './brew-creation/brew-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BeersComponent,
    BrewsComponent,
    RecipesComponent,
    FeedbackComponent,
    Autofocus,
    BrewCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
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
    WindowRef,
    WkoApi
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
