import { render } from '@testing-library/react'

import { mockMovies } from 'data/testdata';
import App from '../App';

import { getMovies } from '../api/movies';
import { MoviesPageObject } from './MoviesPageObject';

jest.mock('../api/movies');

describe('App Component', () => {

    it('should display header', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.loaderDisappears();

        // then
        MoviesPageObject.expectTextVisible(/React Movie Management Application/i);
    });

    it('should fetch movies using the service', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.loaderDisappears();

        // then
        expect(getMovies).toHaveBeenCalled();
    });

    it('should display current movie rating', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.loaderDisappears();

        // then
        MoviesPageObject.expectMovieRating('fakeid-fight-club', "4.67");
    });

    it('should update the rating after star icon was clicked', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.loaderDisappears();

        // when
        MoviesPageObject.rateMovie('fakeid-fight-club', 1);

        // then
        MoviesPageObject.expectMovieRating('fakeid-fight-club', "3.75");
    });

    it('should add a new movie after form was filled and submitted', async () => {
        // given
        (getMovies as jest.Mock).mockImplementation(async () => mockMovies)
        render(<App />);
        await MoviesPageObject.loaderDisappears();

        // then
        MoviesPageObject.expectMoviesVisibleCount(4);

        // when
        MoviesPageObject.clickAddMovieButton();
        MoviesPageObject.fillNewMovieForm({
            Url: "some url",
            Title: "The Green mile",
            Subtitle: "Walk a mile you'll never forget.",
            Description: "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.",
        })
        MoviesPageObject.clickSubmitButton();

        // then
        MoviesPageObject.expectMoviesVisibleCount(5);
        MoviesPageObject.expectTextVisible(/Add Movie/i)
        MoviesPageObject.expectTextVisible(
            /The Green mile/i,
            /Walk a mile you'll never forget/i,
            /Death Row guards at a penitentiary/i,
        )
    });
});
