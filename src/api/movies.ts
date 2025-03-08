import { MovieApiResponse } from "@/components/movies/types"
import { axiosClient } from "./axios-client"
export async function searchMovie(query: string) {
    try {
        const { data } = await axiosClient.get<MovieApiResponse>('search/movie' , {
            params: {
                query
            }
        })
        return data
    } catch(e) {
        console.log(e)
    }
}