import { render } from '@testing-library/react'

import { AddMovieForm, MovieProvider } from 'movies/components';
import { MoviesPageObject } from './MoviesPageObject';

describe('AddMovieForm Component', () => {
    it('calls onSubmitSpy handler for submit button', async () => {
        // given
        const onSubmitSpy = jest.fn();
        const onCancelSpy = jest.fn();
        render(<AddMovieForm onCancel={onCancelSpy} onSubmit={onSubmitSpy} />);

        // when
        MoviesPageObject.fillNewMovieForm({
            Url: "some url",
            Title: "The Green mile",
            Subtitle: "Walk a mile you'll never forget.",
            Description: "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.",
        });
        MoviesPageObject.clickSubmitButton();
        
        // then
        expect(onSubmitSpy).toHaveBeenCalled();
        expect(onCancelSpy).not.toHaveBeenCalled();
    });

    it('calls onCancelSpy handler for cancel button', async () => {
        // given
        const onSubmitSpy = jest.fn();
        const onCancelSpy = jest.fn();
        render(<AddMovieForm onCancel={onCancelSpy} onSubmit={onSubmitSpy} />);

        // when
        MoviesPageObject.fillNewMovieForm({
            Url: "some url",
            Title: "The Green mile",
            Subtitle: "Walk a mile you'll never forget.",
            Description: "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.",
        });
        MoviesPageObject.clickCancelButton();
        
        // then
        expect(onSubmitSpy).not.toHaveBeenCalled();
        expect(onCancelSpy).toHaveBeenCalled();
    });

});

