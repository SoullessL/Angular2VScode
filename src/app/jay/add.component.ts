import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeroDataService, HeroClass } from './webapi.component';

@Component({
    templateUrl: './add.component.html'
})

export class addcomponent implements OnInit {
    public heros: HeroClass[];
    constructor(private heroService: HeroDataService, private router: Router) { };

    ngOnInit(): void {
        this.heroService.createDb();
        this.heros = HeroDataService.heroes;
    }

    add(name: string) {
        this.heroService.add(name);
        this.router.navigate(['/jaylist']);
    }
}