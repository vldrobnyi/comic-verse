const titles = ['Ultimate Spider-Man', 'Absolute Batman', 'The Walking Dead', 'Invincible']
const publishers = ['Marvel', 'DC', 'Image', 'Image']
const genres = ['Action', 'Detective', 'Horror', 'Sci-Fi']

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class ComicCard {
    id: number;
    title: string;
    publisher: string;
    image: string;
    releaseDate: number;
    genre: string;

    constructor() {
        this.id = getRandomInt(1, 4);
        this.title = titles[this.id - 1];
        this.publisher = publishers[this.id - 1];
        this.genre = genres[this.id - 1];
        this.image = `cover${this.id}.jpg`;
        this.releaseDate = getRandomInt(2020, 2024);
    }
}