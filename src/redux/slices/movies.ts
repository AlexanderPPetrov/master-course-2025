import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Movie } from "@/components/movies/types"

export type MoviesState = {
    favoriteMovies: Movie[]
}

const initialState: MoviesState = {
    favoriteMovies: []
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addFavoriteMovies: (state, { payload} : PayloadAction<Movie>) => {
            state.favoriteMovies.push(payload)
        },
        removeFavoriteMovies: (state, { payload } : PayloadAction<Movie>) => {
            state.favoriteMovies = state.favoriteMovies.filter((movie) => {
                return movie.id !== payload.id
            })
        },
        setFavoriteMovies: (state, { payload } : PayloadAction<Movie[]>) => {
            state.favoriteMovies = payload
        }
    },
})

export const {
    addFavoriteMovies,
    removeFavoriteMovies,
    setFavoriteMovies
} = moviesSlice.actions

export default moviesSlice.reducer