import MoviesListItem from "./MoviesListItem"
import { Movie } from "./types"

type Props = {
    movies: Movie[]
}
function MoviesList({ movies } : Props) {

    const moviesComponents = movies.map((movie, index) => {
        return <MoviesListItem 
                    key={index} 
                    movie={movie}
                />
    })

    return <ul className="movies-list list-group">
        {moviesComponents}
    </ul>
}

export default MoviesList