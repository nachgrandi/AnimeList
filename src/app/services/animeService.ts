import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Anime } from '../models/anime';
import { distinctUntilChanged, map, } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private animeListS: Subject<any> = new Subject();
  public animeList$ = this.animeListS.pipe(distinctUntilChanged());
  private animeS: Subject<any> = new Subject();
  public anime$ = this.animeS.pipe(distinctUntilChanged());
  private deleteAnimeS: Subject<any> = new Subject();
  public deleteAnime$ = this.deleteAnimeS.pipe(distinctUntilChanged());
  private createUpdateAnimeS: Subject<any> = new Subject();
  public createUpdateAnime$ = this.createUpdateAnimeS.pipe(distinctUntilChanged());
  private animeListByTitleS: Subject<any> = new Subject();
  public animeListByTitle$ = this.animeListByTitleS.pipe(distinctUntilChanged());

  constructor(private http: HttpClient) { }

  getApiUrl(){
    return 'http://localhost:5000'
  }

  getAnimeList(){
    this.http.get(`${this.getApiUrl()}/animelist/Anime`, {observe: 'response'})
      .subscribe(response => {
        if (response.status === 200) {
          this.setAnimeList(response.body);
        }
      });
  }

  getAnimeListSort(sortType:string){
    let sort = sortType ? '/'.concat(sortType) :''
    this.http.get(`${this.getApiUrl()}/animelist/Anime${sort}`, {observe: 'response'})
      .subscribe(response => {
        if (response.status === 200) {
          this.setAnimeList(response.body);
        }
      });
  }

  setAnimeList(data: Object | null){
    this.animeListS.next(data);
  }

  getAnimeById(animeId: any):any{
    this.http.get(`${this.getApiUrl()}/animelist/Anime/${animeId}`, {observe: 'response'})
      .subscribe(response => {
        if (response.status === 200) {
          this.setAnime(response.body);
        }
      });
  }

  setAnime(data: Object | null){
    this.animeS.next(data);
  }

  updateAnime( anime: Anime){
    let body = anime;
    this.http.post(`${this.getApiUrl()}/animelist/Anime`, body, {observe: 'response'})
      .subscribe(response => {
        this.setCreateUpdate(response);
      });
  }

  setCreateUpdate(data: Object | null){
    this.createUpdateAnimeS.next(data);
  }

  deleteAnime(id: number){
    this.http.delete(`${this.getApiUrl()}/animelist/Anime/${id}`, {observe: 'response'})
      .subscribe(response => {
        this.setDeleteAnime(response)
      });
  }

  setDeleteAnime(data: Object | null){
    this.deleteAnimeS.next(data);
  }

  getByTitle(title: string){
    if (title.length > 3) {
      this.http.get(`${this.getApiUrl()}/animelist/Anime/title/${title}`, {observe: 'response'})
        .subscribe(response => {
          this.setAnimeByTitle(response.body)
        });
    } else {
      this.setAnimeByTitle([])
    }
  }

  setAnimeByTitle(data: Object | null){
    this.animeListByTitleS.next(data);
  }
}
