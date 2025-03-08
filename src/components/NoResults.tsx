
type Props = {
    searchValue: string
}

function NoResults({searchValue} : Props) {
    return <div className="bg-pink-500 p-3 text-white rounded-md">
        Няма намерени резултати за 
        <span className="font-bold px-1">
            {searchValue}
        </span>
    </div>
}

export default NoResults