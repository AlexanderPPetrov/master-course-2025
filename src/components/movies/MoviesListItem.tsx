import { Movie } from "./types"
import { posterBaseUrl } from "@/api/constants"
type Props = {
    movie: Movie
}

function MoviesListItem({ movie } : Props) {
    return <div className="col-4">
        <div className="flex bg-white rounded-md mb-3 shadow-md">
            <img className="w-50" src={`${posterBaseUrl}${movie.poster_path}`}></img>
            <div className="px-3 py-2 flex flex-col">
                <div className="font-bold text-sm">{movie.title}</div>
                <div className="text-xs text-gray-600 mt-1">{movie.release_date}</div>
                <div className="mt-auto">
                <button className="px-4 w-100 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Details
                </button>
                </div>
            </div>
        </div>
    </div>
}

export default MoviesListItem