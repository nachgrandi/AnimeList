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
  public formAnime:FormGroup;
  public animeId:number = 0;
  public title:string = '';
  public isInvalid = {
    title:false,
    startYear:false,
  }

  constructor(private fb: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private AnimeSrv: AnimeService
    ) {
      this.formAnime=this.fb.group({
        title:'',
        description: '',
        startYear:'',
        endYear:'',
      });
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.animeId= params['id'];
        this.animeId =+ this.animeId
        if(isNaN(this.animeId)){
          this.title="Crear";
          return;
        }
        else{
          let anime = this.AnimeSrv.getAnimeById(this.animeId); 
          if (anime) {
            this.title= "Modificar";
            this.formAnime.patchValue({
              title:anime.title,
              description: anime.description,
              startYear: anime.startYear,
              endYear: anime.endYear,
            });
          }
        }
      }
    );
  }

  saveForm(){
    let anime: Anime = Object.assign({},this.formAnime.value);
    anime.id =+ this.animeId; 
    if (this.validate(anime)) {
      if(anime.id>0){
        this.AnimeSrv.updateAnime(anime);
      }
      else{
        this.AnimeSrv.createAnime(anime);
      }
      this.router.navigate(["/list"])
    }
  }

  delete(){
    this.AnimeSrv.deleteAnime(this.animeId)
    this.router.navigate(["/list"])
  }

  back(){
    this.router.navigate(["/list"])
  }

  validate(anime:Anime){
    let valid = true;
    if (anime.title === '') {
      this.isInvalid.title = true
      valid = false
    }else{
      this.isInvalid.title = false
    }
    if (anime.startYear === '') {
      this.isInvalid.startYear = true
      valid = false
    }else{
      this.isInvalid.startYear = false
    }

    return valid
  }
}
