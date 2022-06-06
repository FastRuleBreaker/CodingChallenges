import { Movie } from "types"

export const getMovies = async (): Promise<Movie[]> => {
    return require('../data/movies.json')
}
