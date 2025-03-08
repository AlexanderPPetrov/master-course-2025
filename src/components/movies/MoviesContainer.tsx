import MoviesList from "./MoviesList"
// import type { Student } from "./types"
import { searchMovie } from "@/api/movies"
import { useQuery } from '@tanstack/react-query'
import NoResults from "../NoResults"

type Props = {
    searchValue: string
}

function MoviesContainer( { searchValue } : Props) {
   
    const { data, isLoading } = useQuery({
        queryKey: ['search-movies', searchValue],
        queryFn: () => searchMovie(searchValue),
        enabled: Boolean(searchValue)
    })

    const movies = data?.data?.results ?? []
   
    function getResults() {
        return noResults() ? 
         <NoResults searchValue={searchValue}></NoResults> :
         <MoviesList movies={movies}/>
    }

    function noResults() {
        return !Boolean(movies.length) && searchValue && !isLoading
    }

    return <div>
            <div id="movies-container" 
                        className="mt-2">
                            {getResults()}
            </div>
    </div>
    
   
}

export default MoviesContainer