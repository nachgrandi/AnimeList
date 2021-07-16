import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-img-promotion',
  templateUrl: './img-promotion.component.html',
  styleUrls: ['./img-promotion.component.css'],
  providers: [NgbCarouselConfig],
})
export class ImgPromotionComponent  {
  promotions = [{
    img: 'https://img.anime2you.de/2020/11/Demon-Slayer-Banner.jpg',
    title: 'Deamon Slayer',
    description: ''
  },{
    img: 'https://i.pinimg.com/originals/5b/26/26/5b262629a153363a7f0e150a6ca9dffb.png',
    title: 'Shingeky no Kyojin',
    description: ''
  },{
    img: 'https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeLs6vsoHZVYo0MeH0HcuOXXcXu1UsudNVY-bCjLOWhQZEwKECYgDvGnWddsw2zZComfftzeOANYDQP57qWwyyo30gMj.jpg?r=0cb',
    title: 'Boku no Hero Academy',
    description: ''
  }]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
