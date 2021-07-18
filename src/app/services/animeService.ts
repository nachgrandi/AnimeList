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

  private errorS: Subject<any> = new Subject();
  public error$ = this.errorS.pipe(distinctUntilChanged());

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
      },
      err => {
        this.setError(this.getErrorByCode(err.status))
      });
  }

  getAnimeListSort(sortType:string){
    let sort = sortType ? '/'.concat(sortType) :''
    this.http.get(`${this.getApiUrl()}/animelist/Anime${sort}`, {observe: 'response'})
      .subscribe(response => {
        if (response.status === 200) {
          this.setAnimeList(response.body);
        }
      },
      err => {
        this.setError(this.getErrorByCode(err.status))
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
      },
      err => {
        this.setError(this.getErrorByCode(err.status))
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
      },
      err => {
        this.setError(this.getErrorByCode(err.status))
      });
  }

  setCreateUpdate(data: Object | null){
    this.createUpdateAnimeS.next(data);
  }

  deleteAnime(id: number){
    this.http.delete(`${this.getApiUrl()}/animelist/Anime/${id}`, {observe: 'response'})
      .subscribe(response => {
        this.setDeleteAnime(response)
      },
      err => {
        this.setError(this.getErrorByCode(err.status))
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
        },
        err => {
          this.setError(this.getErrorByCode(err.status))
        });
    } else {
      this.setAnimeByTitle([])
    }
  }

  setAnimeByTitle(data: Object | null){
    this.animeListByTitleS.next(data);
  }

  setError(data: Object | null){
    this.errorS.next(data);
  }

  getErrorByCode(error: Number){
    let retError = null;
    switch (error) {
      case 0:
        retError = {
          code:error,
          message: "Servicio momentaneamente caido."
        }
        break;
      case 500:
        retError = {
          code:error,
          message: "Ups, hubo un error! intentalo nuevamente"
        }
        break;
      case 400:
        retError = {
          code:error,
          message: "No encontramos lo que buscas!"
        }
        break;
      case 401:
        retError = {
          code:error,
          message: "Error con la autorizacion"
        }
        break;
      default:
        retError = {
          code:error,
          message: "Ocurrio un error inesperado. Intente mas tarde"
        }
        break;
    }

    return retError
  }
}
