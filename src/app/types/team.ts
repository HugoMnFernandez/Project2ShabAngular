import { Character } from './character';

export class Team {

    constructor(characters: Character[]) {
        this.characters = characters;
    }

    characters: Character[];
}
