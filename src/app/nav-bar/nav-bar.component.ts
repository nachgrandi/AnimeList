import { Component, OnInit } from '@angular/core';

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
      title: 'Lista',
      route: '/list',
    },{
      title: 'Lista',
      route: '/list',
    },{
      title: 'Lista',
      route: '/list',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
