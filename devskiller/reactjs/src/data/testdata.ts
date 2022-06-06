import { Movie } from "types";

export const mockMovies: Movie[] = [
    {
        id: 'fakeid-fight-club', 
        title: 'Fight Club',
        subtitle: 'Mischief. Mayhem. Soap.',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        imageUrl: "sample.jpg",
        ratings: [4, 5, 5]
    },
    {
        id: 'fakeid-the-matrix', 
        title: 'The Matrix',
        subtitle: 'Fight for the future begins',
        description: 'Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
        imageUrl: "sample.jpg",
        ratings: [1, 5]
    },
    {
        id: 'fakeid-the-godfather', 
        title: 'The Godfather',
        subtitle: "It's strictly business",
        description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        imageUrl: "sample.jpg",
        ratings: [4, 5, 4, 5, 3]
    },
    {
        id: 'fakeid-the-shawshank-redemption', 
        title: 'The Shawshank Redemption',
        subtitle: 'Fear can hold you prisoner. Hope can set you free.',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        imageUrl: "sample.jpg",
        ratings: [2, 5, 5, 5, 4, 5]
    },
];

export const fightClubMovie = mockMovies[0];
