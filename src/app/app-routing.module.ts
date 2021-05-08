import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: AnimeListComponent },
  { path: 'add', component: AddAnimeComponent },
  { path: 'modify/:id', component: AddAnimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
