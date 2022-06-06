import { fireEvent, getAllByTestId, getByTestId, getByText, screen, waitFor } from "@testing-library/react"
import { Movie } from "types";

class PageObject {
    async loaderDisappears(){
        await waitFor(() => {
            expect(screen.queryByText('loading')).not.toBeInTheDocument()
        })
    }

    clickAddMovieButton(){
        const addMovieBtn = screen.getByText(/Add Movie/i);
        fireEvent.click(addMovieBtn);
    }

    clickSubmitButton(){
        const submitBtn = screen.getByText(/Submit/i);
        fireEvent.click(submitBtn)
    }

    clickCancelButton(){
        const submitBtn = screen.getByText(/Cancel/i);
        fireEvent.click(submitBtn)
    }

    private formFields = ['Url', 'Title', 'Subtitle', 'Description']

    expectNewMovieFormVisible(){
        for (const fieldName of this.formFields) {
            screen.getByPlaceholderText(`Enter ${fieldName}`)
        }
    }

    fillNewMovieForm(formData: Partial<Record<"Url" | "Title" | "Subtitle" | "Description", string>>){
        for (const [fieldName, value] of Object.entries(formData)) {
            const formElement = screen.getByPlaceholderText(`Enter ${fieldName}`)
            fireEvent.change(formElement, { target: { value } })
        }
    }

    expectTextVisible(...phrases: (RegExp | string)[]){
        for (const phrase of phrases){
            const element = screen.getByText(phrase)
            expect(element).toBeInTheDocument()
        }
    }

    private getMovieCard(movieId: Movie['id']){
        return screen.getByTestId(`movie-item-${movieId}`)
    }

    rateMovie(movieId: Movie['id'], rate: 1 | 2 | 3 | 4 | 5){
        const stars = getAllByTestId(this.getMovieCard(movieId), 'star-item')
        fireEvent.click(stars[rate - 1])
    }

    expectMovieRating(movieId: Movie['id'], rate: number | string){
        const ratingElement = getByTestId(this.getMovieCard(movieId), 'movie-rating')
        expect(ratingElement).toHaveTextContent(String(rate))
    }

    clickDeleteMovieButton(movieId: Movie['id']){
        const deleteBtn = getByText(this.getMovieCard(movieId), 'Delete')
        fireEvent.click(deleteBtn)
    }

    expectMoviesVisibleCount(count: number){
        expect(screen.queryAllByTestId(/movie-item/)).toHaveLength(count)
    }
}

export const MoviesPageObject = new PageObject();
