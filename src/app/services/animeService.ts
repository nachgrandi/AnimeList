import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  
  constructor() { }
  
  public AnimeList: Anime[] = [
      { id:1, title:"Naruto", startYear: '1/1/2000', endYear:"1/1/2000" },
      { id:2, title:"Bleach", startYear: '1/1/2000', endYear:"1/1/2000" },
      { id:3, title:"One Piece", startYear: '1/1/2000', endYear:"1/1/2000" },
      { id:4, title:"Shingeki no kyoshin", startYear: '1/1/2000', endYear:"1/1/2000" },
    ];
  
  getAnimeList():Anime[]{
    return this.AnimeList.slice();
  }

  getAnimeById(animeId: number){
    return this.AnimeList.find(x => x.id === animeId)
  }

  updateAnime( anime: Anime){

  }

  createAnime(anime: Anime){
    
  }
}
