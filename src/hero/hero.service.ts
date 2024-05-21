import { Injectable } from '@nestjs/common';
import { Hero } from "./interfaces/hero.interface"

@Injectable()
export class HeroService {
    private readonly heros: Hero[] =  [
        {
            id: 1,
            name: "Hero 1"
        }, 
        {
            id: 2,
            name: "Hero 2"
        }
    ];

    create(hero: Hero) {
        this.heros.push(hero)
    }

    findAll(): Hero[] {
        return this.heros
    }
}
