import { useSelector } from "react-redux"
import ToggleFavorite from "../ui/ToggleFavorite"
import type { RootState } from "@/redux/store"

function FavoriteMovies() {
    
    const favoriteMovies = useSelector(({ movies }: RootState) => {
        return movies.favoriteMovies
    }) 

    function getFavoriteMoviesList() {
        return favoriteMovies.map((movie) => {
            return <div key={movie.id} className="rounded-sm border border-gray-400 my-1 px-2 py-1">
                <ToggleFavorite movie={movie}/>
                <div className="font-bold font-sm">
                    {movie.title}
                </div>
                <div className="text-gray-400">
                    {movie.release_date}
                </div>
            </div>
        })
    }
    
    return <div>
        { getFavoriteMoviesList()}
    </div>
}

export default FavoriteMovies