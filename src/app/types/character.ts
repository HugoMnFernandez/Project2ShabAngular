import { Team } from './team';

export class Character {

// Pojo Stuff
    characterId: number;
    wins: number;
    losses: number;
    rank: number;
    teams: Team[];
// Marvel API stuff
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string
    };

}
