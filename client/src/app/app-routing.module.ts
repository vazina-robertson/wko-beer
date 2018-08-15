import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// nav components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BeersComponent } from './beers/beers.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '',              component: HomeComponent },
  { path: 'about',         component: AboutComponent },
  { path: 'beers',         component: BeersComponent },
  { path: 'recipes',       component: RecipesComponent },
  { path: 'feedback',      component: FeedbackComponent },
  { path: '**',            component: HomeComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
