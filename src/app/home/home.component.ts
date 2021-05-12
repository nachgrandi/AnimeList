import { Component, OnInit } from '@angular/core';
import { Anime } from '../models/anime';
import { AnimeService } from '../services/animeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public animeList: Anime[];
  constructor(
    private animeSrv: AnimeService
  ) { 
    this.animeList = this.animeSrv.getAnimeList()
  }

  ngOnInit(): void { }

}
