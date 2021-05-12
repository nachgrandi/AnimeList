import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../models/anime'
import { AnimeService } from '../services/animeService';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  public animeList : Anime[] = [];
  public title = 'Lista de animes'
  constructor(
    private animeService : AnimeService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.animeList = this.animeService.getAnimeList();
  }

  edit(id: number) {
    console.log(id)
    this.router.navigate([`modify/${id}`])
  }

  create(){
    this.router.navigate([`add`])
  }
}
