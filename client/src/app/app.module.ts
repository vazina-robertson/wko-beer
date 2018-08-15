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
import { RecipesComponent } from './recipes/recipes.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WkoApi } from './wko-api.service';

// wko.beer modules
import { BrewsModule } from './brews/brews.module';
import { WkoDirectivesModule } from './directives/wko-directives.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BeersComponent,
    RecipesComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WkoDirectivesModule,
    BrewsModule,
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
