import { Character } from './character';

export class User {
    username: string;
    password: string;
    isAdmin: Boolean;
    followedCharacters: Character[];
}
