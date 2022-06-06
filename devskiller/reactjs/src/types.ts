export interface Movie {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    imageUrl: string,
    ratings: number[]
}

export interface MovieFetchAction {
    type: 'fetch',
    payload: {
        data: Movie[]
    }
}

export interface MovieAddAction {
    type: 'add',
    payload: {
        movie: Omit<Movie, "id" | "ratings">
    }
}

export interface MovieDeleteAction {
    type: 'delete',
    payload: {
        movieId: Movie['id']
    }
}

export interface MovieRateAction {
    type: 'rate',
    payload: {
        movieId: Movie['id']
        rating: number
    }
}

export type MoviesAction =
    | MovieFetchAction
    | MovieAddAction
    | MovieDeleteAction
    | MovieRateAction
