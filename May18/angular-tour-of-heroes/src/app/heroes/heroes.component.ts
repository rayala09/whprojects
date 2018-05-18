import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import {HEROES} from './../mock-heroes';
import { HeroService } from './../services/hero-service';


@Component ({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroComponent implements OnInit {
  public heroes: Hero[];
  // public heroes = HEROES;
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroesFromObservable) => {
      this.heroes = heroesFromObservable;
    });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
