import { Movie } from "types";

function to2(num: number) {    
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function getAvgRating(movie: Movie) {
    if (movie.ratings.length === 0) {
        return 0
    }

    const avgRating = movie.ratings.reduce((a, b) => a + b) / movie.ratings.length
    return to2(avgRating)
}
