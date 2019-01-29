import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { TagsComponent } from './tags/tags.component';
import { ImageComponent } from './image/image.component';
import { ImagesComponent } from './images/images.component';
import {AuthorComponent} from './author/author.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'image/:uri', component: ImageComponent},
  { path: 'images', component: ImagesComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
