import { Movie } from "./types"

type Props = {
    movie: Movie
}

function MoviesListItem({ movie } : Props) {
    return <li className="list-group-item">
        <div>Филм: {movie.title}</div>
        <div>Описание: {movie.overview}</div>
        <div>Дата: {movie.release_date}</div>
        <div>{movie.poster_path}</div>
    </li>
}

export default MoviesListItem