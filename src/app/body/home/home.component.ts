import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../../models/anime';
import { AnimeService } from '../../services/animeService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public animeList$ : Observable<any> =  new Observable<any>();
  constructor(
    private animeService: AnimeService
  ) { 
    this.animeList$ = this.animeService.animeList$;
    animeService.getAnimeList();
  }

  ngOnInit(): void { }

}
