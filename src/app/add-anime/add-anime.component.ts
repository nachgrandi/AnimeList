import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import { Anime } from '../models/anime';
import { AnimeService } from '../services/animeService';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent implements OnInit {
  formAnime:FormGroup;
  animeId:number = 0;
  title:string = '';

  constructor(private fb: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private AnimeSrv: AnimeService
    ) {
      this.formAnime=this.fb.group({
        title:'',
        startDate:'',
        endDate:'',
      });
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.animeId= params['id'];
        console.log('anime', this.animeId)
        if(isNaN(this.animeId)){
          this.title="Modificar";
          return;
        }
        else{
          let anime = this.AnimeSrv.getAnimeById(this.animeId); 
          if (anime) {
            this.title= "Crear";
            this.formAnime.patchValue({
              title:anime.title,
              startDate: anime.startYear,
              endDate: anime.endYear,
            });
          }
        }
      }
    );
  }

  saveForm(){
    
    let anime: Anime = Object.assign({},this.formAnime.value);
    anime.id =+ this.animeId; 

    if(anime.id>0){
      this.AnimeSrv.updateAnime(anime);
    }
    else{
      this.AnimeSrv.createAnime(anime);
    }
    this.router.navigate(["/alumnos"])
  }
}
