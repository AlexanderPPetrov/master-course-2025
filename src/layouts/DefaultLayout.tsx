import FavoriteMovies from "@/components/movies/FavoriteMovies"
import Navbar from "@/components/navbar/Navbar"
import FloatingDrawer from "@/components/ui/FloatingDrawer"

type Props = {
    leftContent: React.ReactNode
    rightContent: React.ReactNode
    subHeader: React.ReactNode
}
function DefaultLayout({ 
    leftContent, 
    rightContent, 
    subHeader, 
}: Props) {
    return <>
        <div>
            <div className="container">
                <Navbar/>
            </div>
        </div>
        <div className="container">
            <div className="sub-header mt-5">
                { subHeader }
            </div>
            <div className="row mt-5">
                <div className="col-md-3">{leftContent}</div>
                <div className="col-md-9">{rightContent}</div>
            </div>
        </div>
        <FloatingDrawer>
            <FavoriteMovies/>
        </FloatingDrawer>
    </>
}

export default DefaultLayout