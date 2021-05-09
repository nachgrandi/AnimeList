import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  
  constructor() { }
  
  public AnimeList: Anime[] = [
      { id:1, title:"Naruto", startYear: '2000-01-01', endYear:"2000-01-01" },
      { id:2, title:"Bleach", startYear: '2000-01-01', endYear:"2000-01-01" },
      { id:3, title:"One Piece", startYear: '2000-01-01', endYear:"2000-01-01" },
      { id:4, title:"Shingeki no kyoshin", startYear: '2000-01-01', endYear:"2000-01-01" },
    ];
  
  getAnimeList():Anime[]{
    return this.AnimeList.slice();
  }

  getAnimeById(animeId: any){
    animeId =+ animeId;
    let anime = this.AnimeList.find(x => x.id === animeId)
    console.log('resultadoi', anime)
    return anime
  }

  updateAnime( anime: Anime){

  }

  createAnime(anime: Anime){
    
  }
}
