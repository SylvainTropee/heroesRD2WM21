import { Injectable } from '@angular/core';
import {Hero} from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroApi {

  private heroes : Hero[]; //Array<Hero>

  constructor() {
    this.heroes = [];
    this.heroes.push({id : 1, name : 'Hulk', image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"});
    this.heroes.push({id : 2,name : 'Batman', image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/71-batman-ii.jpg"});
    this.heroes.push({id : 3,name : 'Buffy', image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/140-buffy.jpg"});
  }

  public findAllHeroes() : Hero[] {
    return this.heroes;
  }


  public findHeroById(id : number) : Hero | undefined {
    return this.heroes.find(
      (hero : Hero) : boolean => hero.id == id
    )
  }
}
