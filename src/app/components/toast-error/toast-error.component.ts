import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeService } from '../../services/animeService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-toast-error',
  templateUrl: './toast-error.component.html',
  styleUrls: ['./toast-error.component.css']
})
export class ToastErrorComponent implements OnInit {
  public error$ : Observable<any> =  new Observable<any>();
  public errorLogin$ : Observable<any> =  new Observable<any>();
  durationInSeconds = 5;
  constructor(
    private animeService : AnimeService,
    private userService: UserService,
    private _snackBar: MatSnackBar) { 
      this.error$ = animeService.error$;
      this.error$.subscribe(
        (err) => {
          this.openSnackBar(err.message)
        }
      )
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string ) {
    this._snackBar.open(message, 'Cerrar');
  }

}
