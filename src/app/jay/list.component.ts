import { NgModule, Component, OnInit } from '@angular/core';
import { HttpModule, Jsonp, Http } from '@angular/http';
import { HeroDataService, HeroClass } from './webapi.component';
import 'rxjs/add/operator/toPromise';

// imports:[
//     InMemoryWebApiModule.forRoot(HeroData),
//     ]

@Component({
    // selector: 'jay-list',
    templateUrl: './list.component.html'
})
export class listcomponent implements OnInit {
    public heros: HeroClass[];
    constructor(private heroService: HeroDataService, private http: Http) { };
    ngOnInit(): void {
        this.heroService.createDb();
        // this.heros = HeroDataService.heroes;
        this.http.get('/app/herohero').toPromise().then(h => h.json().data as HeroClass[]).then(h => this.heros = h).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}