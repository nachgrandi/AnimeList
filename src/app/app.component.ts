import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from './services/userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'trabajoPractico1';

  constructor(
    private userService: UserService
  ) {
    userService.isLogged()
  }

  ngOnInit(){}
}
