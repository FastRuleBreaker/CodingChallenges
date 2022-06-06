import { fireEvent, render } from '@testing-library/react'

import { mockMovies } from 'data/testdata';

import App from '../App';
import { MoviesPageObject } from './MoviesPageObject';

jest.mock('../api/movies', () => ({
    getMovies: async () => mockMovies
}))

describe('MovieList Component', () => {
    it('should not display a movie after it gets deleted', async () => {
        // given
        render(<App />);
        await MoviesPageObject.loaderDisappears();

        // when
        MoviesPageObject.clickDeleteMovieButton('fakeid-fight-club');

        // then
        MoviesPageObject.expectMoviesVisibleCount(3);
    });
});

