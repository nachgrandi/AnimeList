import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimeService } from '../services/animeService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public animeListByTitle$ : Observable<any> =  new Observable<any>();
  public menu = [
    {
      title: 'Inicio',
      route: '/',
    },
    {
      title: 'Lista de animes',
      route: '/list',
    }
  ]
  formNav:FormGroup;

  constructor(
    private animeService : AnimeService,
    private fb: FormBuilder
  ) { 
    this.formNav=this.fb.group({
      name:'',
    });
    this.animeListByTitle$ = animeService.animeListByTitle$;
  }

  ngOnInit(): void {
    this.clean()
  }

  findByName(){
    let title = Object.assign({},this.formNav.value);
    this.animeService.getByTitle(title.name)
  }

  clean(){
    this.formNav.patchValue({
      name: '',
    });
    this.animeService.getByTitle('')
  }
}
