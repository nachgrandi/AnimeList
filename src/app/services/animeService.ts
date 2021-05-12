import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  
  constructor() { }
  
  public AnimeList: Anime[] = [
      { id:1, title:"Naruto", description: "Su historia se desarrolla en un mundo de ninjas, en el que su protagonista, Naruto, sueña con convertirse en Hokage, el líder de su aldea. Sin embargo, el chico no lo tiene fácil, pues desde su niñez ha sido marginado por tener en su interior el espíritu del Kyûbi, el mítico y temido zorro de nueve colas. A pesar de ello, Naruto luchará para hacerse respetar e irá creciendo junto a sus compañeros para enfrentarse a las adversidades del mundo de los ninjas.", startYear: '2002-10-03', endYear:"2007-02-08" },
      { id:2, title:"Bleach", description: "Kurosaki Ichigo es un estudiante de instituto de 15 años, que tiene una peculiaridad: es capaz de ver, oír y hablar con fantasmas. Pero no sabe hasta dónde puede abarcar la clasificación de espíritus, ni lo que conlleva el saberlo. Un buen día, una extraña chica de pequeña estatura que viste ropas negras de samurai entra en su cuarto. Se llama Rukia Kuchiki, y es una Shinigami (Dios de la Muerte). Ante la incredulidad de Ichigo, le explica que su trabajo es mandar a las almas buenas o plus a un lugar llamado la Sociedad de Almas, y eliminar a las almas malignas o hollows.", startYear: '2004-10-05', endYear:"2012-03-27" },
      { id:3, title:"One Piece", description: "D. Luffy se rehusa a que nadie se interponga en su camino por la búsqueda para convertirse el rey de todos los piratas. Con un camino trazado por las traicioneras aguas del Grand Line y más allá, se trata de un capitán que nunca se dará por vencido hasta que consiga el tesoro más grande de la Tierra: el Legendario One Piece.", startYear: '1999-10-20', endYear:"" },
      { id:4, title:"Shingeki no kyoshin", description: "Muchos años atrás, la humanidad estuvo al borde de la extinción con la aparición de unas criaturas gigantes que devoraban a todas las personas. Huyendo, la humanidad consiguió sobrevivir en una ciudad fortificada de altas murallas que se ha convertido en el último reducto de la civilización contra los Titanes que campan a sus anchas por el mundo.", startYear: '2013-04-06', endYear:'' },
    ];
  
  getAnimeList():Anime[]{
    return this.AnimeList.slice();
  }

  getAnimeById(animeId: any){
    animeId =+ animeId;
    let anime = this.AnimeList.find(x => x.id === animeId)
    return anime
  }

  updateAnime( anime: Anime){
    let animeSerch = this.AnimeList.find(x => x.id === anime.id)
    if (animeSerch){
      let index = this.AnimeList.indexOf(animeSerch)
      this.AnimeList[index]= anime;
    }
  }

  createAnime(anime: Anime){
    anime.id = this.AnimeList[this.AnimeList.length -1].id + 1
    this.AnimeList.push(anime)
  }

  deleteAnime(id: number){
    let animeSerch = this.AnimeList.find(x => x.id === id)
    if (animeSerch){
      let index = this.AnimeList.indexOf(animeSerch)
      this.AnimeList.splice(index, 1);
    }
  }

  getIdByName(name: string){
    if (name === '') {
      return -1
    }
    let animeSerch = this.AnimeList.find(x => x.title.toUpperCase().includes(name.toUpperCase()))
    let id = -1;
    if (animeSerch){
      id = animeSerch.id
    }
    return id
  }
}
