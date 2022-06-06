import { render, screen } from '@testing-library/react'

import { fightClubMovie } from 'data/testdata';
import { getAvgRating } from 'movies/ratings';

import { MovieCard, MovieProvider } from 'movies/components';
import { MoviesPageObject } from './MoviesPageObject';

describe('MovieCard Component', () => {
    it('displays correct movie data', async () => {
        // given
        const movie = fightClubMovie
        render(<MovieProvider>
            <MovieCard movie={movie} />
        </MovieProvider>);
        await MoviesPageObject.loaderDisappears();

        const titleElement = screen.getByText(movie.title);
        const subtitleElement = screen.getByText(movie.subtitle);
        const descriptionElement = screen.getByText(movie.description);
        const displayedImage = document.querySelector("img") as HTMLImageElement;
        
        // then
        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(displayedImage.src).toContain(movie.imageUrl);
    });

    it('displays correct movie rating', async () => {
        // given
        const movie = fightClubMovie
        render(<MovieProvider>
            <MovieCard movie={movie} />
        </MovieProvider>);
        await MoviesPageObject.loaderDisappears();
        const ratingElement = screen.getByText(getAvgRating(movie));
        
        // then
        expect(ratingElement).toBeInTheDocument();
    });

    it('displays correct movie rating stars width', async () => {
        // given
        const movie = fightClubMovie
        render(<MovieProvider>
            <MovieCard movie={movie} />
        </MovieProvider>);
        await MoviesPageObject.loaderDisappears();
        const container = document.querySelector("#rate-container") as HTMLImageElement;
        
        // then
        expect(container.style.width).toEqual(`${Math.floor((getAvgRating(movie) * 110) / 5)}px`); 
    });
});
