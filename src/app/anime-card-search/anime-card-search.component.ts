import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-card-search',
  templateUrl: './anime-card-search.component.html',
  styleUrls: ['./anime-card-search.component.css']
})
export class AnimeCardSearchComponent implements OnInit {
  @Input() anime : any;
  @Output() warnClick = new EventEmitter();
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  click(){
    this.router.navigate([`modify/${this.anime.id}`])
    this.warn()
  }

  warn(){
    this.warnClick.emit();
  }
}
