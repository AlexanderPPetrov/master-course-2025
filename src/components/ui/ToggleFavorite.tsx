import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { addFavoriteMovies, removeFavoriteMovies } from "@/redux/slices/movies"
import { RootState } from "@/redux/store"
import { Movie } from "../movies/types";

type Props = {
    movie: Movie
}

function ToggleFavorite({ movie } : Props) {
    
    const favoriteMovies = useSelector(({ movies }: RootState ) => movies.favoriteMovies)
    const dispatch = useDispatch()

    const isInFavorites = () => {
        return favoriteMovies.some(favoriteMovie => {
            return favoriteMovie.id === movie.id
        })
    }

    function onToggleFavorite() {
        if(isInFavorites()) {
            dispatch(removeFavoriteMovies(movie))
            return
        }
        dispatch(addFavoriteMovies(movie))
    }

    return <FaHeart 
                className={`cursor-pointer m-1 shrink-0 ${isInFavorites() ? 'text-yellow-500' : 'text-gray-400'}`} 
                size={20} 
                onClick={onToggleFavorite}/>
}
export default ToggleFavorite