import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeService } from '../services/animeService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.formNav=this.fb.group({
      name:'',
    });
  }

  ngOnInit(): void {
    this.formNav.patchValue({
      name: '',
    });
  }

  findByName(){
    let name = Object.assign({},this.formNav.value);
    let id = this.animeService.getIdByName(name.name);
    if (id > -1) {
      console.log(id)
      this.router.navigate([`modify/${id}`])
    }
  }
}
