import MoviesList from "./MoviesList"
import SearchInput from "../ui/SearchInput"
// import type { Student } from "./types"
import { useState } from "react"
import NoResults from "../NoResults"
import { useEffect } from "react"
import { searchMovie } from "@/api/movies"
import type { Movie } from "./types"
type Props = {
    searchValue: string
}

function MoviesContainer( { searchValue } : Props) {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        searchMovie(searchValue).then((response) => {
            const movies = response?.results ?? []
            setMovies(movies)
        })
    }, [searchValue])


    function getResults() {
        return noResults() ? 
         <NoResults searchValue={searchValue}></NoResults> :
         <MoviesList movies={movies}/>
    }

    function noResults() {
        return !Boolean(movies.length) && searchValue
    }

    return <div>
            <div id="movies-container" 
                        className="mt-2">
                            {getResults()}
            </div>
    </div>
    
   
}

export default MoviesContainer