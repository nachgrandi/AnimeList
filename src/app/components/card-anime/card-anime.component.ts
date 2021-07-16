import { Component, Input, OnInit } from '@angular/core';
import { AnimeListComponent } from '../../body/anime-list/anime-list.component';
import { Anime } from '../../models/anime';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css']
})
export class CardAnimeComponent implements OnInit {
  @Input() anime : any;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
