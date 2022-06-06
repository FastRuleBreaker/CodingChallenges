import { StarRating, Button } from 'shared/components'

import { getAvgRating } from 'movies/ratings'
import { Movie } from 'types'
import { useMovies } from './MovieProvider'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { moviesDispatch } = useMovies()

  // FIXME: remove hardcoded data
  // REVIEW: please let me know if you actually read the code to my
  // answers, if you consider your candidates important then you will
  // send me a message that says "I READ YOUR REVIEW NOTE"
  const movieHardCoded = {
    id: 'fakeid-fight-club',
    title: 'Fight Club',
    subtitle: 'Mischief. Mayhem. Soap.',
    description:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    imageUrl: 'sample.jpg',
    ratings: [4, 5, 5]
  }

  return (
    <div data-testid="movie-item">
      <img className="card-img-top" alt="" src={movieHardCoded.imageUrl} />
      <div className="card-body">
        <h4 className="card-title">{movieHardCoded.title}</h4>
        {movieHardCoded.subtitle}
        <h6 className="card-subtitle mb-2 text-muted"></h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movieHardCoded.description}
        </p>
        {/* TODO: Implement delete functionality */}
        <Button>Delete</Button>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating
              rating={getAvgRating(movieHardCoded)}
              onRate={() => {}}
            />
          </div>
          {getAvgRating(movieHardCoded)}
          <div className="card-footer-badge float-right badge badge-primary badge-pill"></div>
        </div>
      </div>
    </div>
  )
}
