# React Hooks Movie Management Application

React movies application provides a simple list of movies.

----

## Main features

Your task is to complete a simple movie management application by adding 4 main features:
- Listing all the movies
- Creating a new movie by filling a form
- Deleting an existing movie
- Rating a movie using stars 1-5

Make sure that:
- all the tests pass
- you stick to the names of the props of the original components (don't refactor them), so that the automatic tests don't break

## Application

- each *movie* contains `id`, `title`, `subtitle`, `description`, `imageUrl` and `ratings` fields. See typescript types in the `types.ts` file.
    - `data/movies.json` and `data/testdata.ts` files provide movies for the app and the tests, respectively
- `api/movies.ts` file includes function which retrieves the movies data
- `movies/ratings.ts` file includes functions related to the Movie model (average rate)
- `movies/useMovies.ts` file includes a stub of a react hook which implements state management, used by the `MovieProvider`.

## Requirements

- Movies application should provide a list of movies, 
- Implement `MovieCard` component that will display data of a single movie it gets through a prop - `imageUrl`, `title`, `subtitle`, `description`, `ratings` and stars that are clickable through `StarRating` component. Also, add delete option for a movie, which should call a handler and dispatch appropriate action
- Implement `MovieList` component that should display a list of movies as `MovieCard`s and a Card at the end that should contain an `AddMovieButton` initially, or display `AddMovieForm` once clicked. Each of the actions inside `AddMovieForm` (adding a movie or canceling the form) should lead back to the `AddMovieButton`.
- Implement a clickable button in `AddMovieButton` component that will call appropriate handler (that switches to form) and have `Add movie` button label text displayed
- Implement `AddMovieForm` component that should show 4 text input fields: `url` (of the movie image), `title`, `subtitle` and `description`. It should also display `Add Movie` button. When all the fields are filled and the form is submitted, a new movie should be added and displayed.
- in `movies/useMovies.ts` file, the `useMovies` custom hook:
    - should based on `useReducer`
    - should be used in `MovieProvider` and pass down its state via context down to other components
    - should allow to dispatch following actions:
        - `fetch` - provide initial data
        - `add` - add a new movie, thanks to filling a form
        - `delete` - delete a certain movie by clicking a button
        - `rate` - rate a movie which aggregates all the rates and displays the new average rate of the movie.

## Setup

Follow these steps for correct application setup:

1. `npm install` – install dependencies
2. `npm test` – run all tests (should fail unless you fix the app)
3. `npm run test:watch` - run all tests in _watch mode_ (optionally, you can use it locally if you prefer)
4. `npm start` – serve the app at [http://localhost:3000/](http://localhost:3000/) (it automatically opens the app in your default browser)

## Good Luck!
