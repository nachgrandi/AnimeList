import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Anime } from '../../models/anime';
import { AnimeService } from '../../services/animeService';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent implements OnInit {
  public formAnime:FormGroup;
  public animeId:number = 0;
  public title:string = '';
  public isInvalid = {
    title:false,
    startYear:false,
  }
  public anime$ : Observable<any> =  new Observable<any>();
  public deleteAnime$ : Observable<any> =  new Observable<any>();
  public createUpdateAnime$ : Observable<any> =  new Observable<any>();

  constructor(private fb: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private AnimeSrv: AnimeService
    ) {
      this.formAnime=this.fb.group({
        title:['',  [Validators.required,Validators.minLength(3), Validators.maxLength(100)]],
        descripcion: ['',  [Validators.required]],
        imageLink:null,
        startYear:[null,  [Validators.required]],
        endYear:null,
      });
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
     async (params) => {
        this.animeId= params['id'];
        this.animeId =+ this.animeId
        if(isNaN(this.animeId)){
          this.title="Crear";
          this.animeId=0;
          return;
        }else{
          this.anime$ = this.AnimeSrv.anime$
          this.anime$.subscribe((x) => {
            this.title= "Modificar";
            let endYear = null
            if (x[0].endYear) endYear = x[0].endYear.slice(0,10);
            this.formAnime.patchValue({
              title:x[0].title,
              descripcion: x[0].descripcion,
              imageLink:x[0].imageLink,
              startYear: x[0].startYear.slice(0,10),
              endYear: endYear,
            });
          })
          this.AnimeSrv.getAnimeById(this.animeId);
        }
      }
    );
  }

  saveForm(){
    let anime: Anime = Object.assign({},this.formAnime.value);
    anime.id =+ this.animeId; 
    this.createUpdateAnime$ = this.AnimeSrv.createUpdateAnime$;
    this.AnimeSrv.updateAnime(anime);
    this.createUpdateAnime$.subscribe((x) => {
      if (x.status !== 200) {
        alert("Error creando/modificando el anime")
      }
      this.router.navigate(["/list"])
    })
  }

  delete(){
    this.deleteAnime$ = this.AnimeSrv.deleteAnime$;
    this.AnimeSrv.deleteAnime(this.animeId)
    this.deleteAnime$.subscribe((x) => {
      if (x.status !== 200) {
        alert("Error eliminando el anime")
      }
      this.router.navigate(["/list"])
    })
  }

  back(){
    this.router.navigate(["/list"])
  }
}
