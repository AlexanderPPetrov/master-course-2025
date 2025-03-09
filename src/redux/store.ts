import { configureStore } from '@reduxjs/toolkit'
import movies from './slices/movies'

const store = configureStore({
    reducer: {
        movies,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store