import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { AnimeListComponent } from './body/anime-list/anime-list.component';
import { AddAnimeComponent } from './body/add-anime/add-anime.component';
import { GuardPageService } from './services/pageGuardService';
import { UnauthorizedComponent } from './body/unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: AnimeListComponent, canActivate: [GuardPageService] },
  { path: 'add', component: AddAnimeComponent, canActivate: [GuardPageService] },
  { path: 'modify/:id', component: AddAnimeComponent, canActivate: [GuardPageService] },
  { path: 'unauthorized', component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
