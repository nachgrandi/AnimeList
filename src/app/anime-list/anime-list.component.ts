import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimeService } from '../services/animeService';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  public animeList$ : Observable<any> =  new Observable<any>();
  public title = 'Lista de animes'
  constructor(
    private animeService : AnimeService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.animeList$ = this.animeService.animeList$;
    this.animeService.getAnimeList();
  }

  edit(id: number) {
    this.router.navigate([`modify/${id}`])
  }

  sort(type: string){
    type ? this.animeService.getAnimeListSort(type) : this.animeService.getAnimeListSort('')
  }

  create(){
    this.router.navigate([`add`])
  }
}
