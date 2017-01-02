import { InMemoryDbService } from 'angular-in-memory-web-api';

export class HeroClass {
    constructor(public id: string, public name: string) { };
}

export class HeroDataService implements InMemoryDbService {
    public static heroes: HeroClass[];

    createDb() {
        if (HeroDataService.heroes == null) {
            HeroDataService.heroes = [
                new HeroClass('1', 'Windstorm'),
                new HeroClass('2', 'Bombasto'),
                new HeroClass('3', 'Magneta'),
                new HeroClass('4', 'Tornado')
            ];
        }
        let herohero = HeroDataService.heroes;
        return { herohero };
    }

    add(name: string) {
        HeroDataService.heroes.push(new HeroClass('8', name));
    }
}