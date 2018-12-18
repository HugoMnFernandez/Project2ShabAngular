export class CharacterResults {

    // character results contains a data field which has an array of results for each character
    data: {
        results: {
            id: number;
            name: string;
            description:
            string;
            thumbnail: {
                path: string;
                extension: string
            }
        }[]

    };
}