import DefaultLayout from "../layouts/DefaultLayout"
import PageTitle from "@/components/PageTitle"
import SearchInput from "@/components/ui/SearchInput"

import { searchMovie } from "@/api/movies"
import { useEffect, useState } from "react"
import MoviesContainer from "@/components/movies/MoviesContainer"

function MoviesPage() {

    const [searchValue, setSearchValue] = useState<string>('')

    return <DefaultLayout 
                subHeader={<PageTitle title="Филми"/>}
                leftContent={
                    <SearchInput 
                        value={searchValue} 
                        onChange={e => setSearchValue(e.target.value)}
                        onClearSearch={() => setSearchValue('')}
                    />
                } 
                rightContent={
                    <MoviesContainer searchValue={searchValue}/>
                }/>
}

export default MoviesPage