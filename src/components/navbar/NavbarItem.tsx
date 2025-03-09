import { Link } from "react-router"
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { useAppContext } from "@/providers/ApplicationProvider"
type Props = {
    to: string
    title: string
}

function NavbarItem({ to, title } : Props) {

    const { getThemeColors } = useAppContext()
    return <NavigationMenuItem>
        <Link to={to}
        className={`
            ${getThemeColors()} 
        py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>
            {title}
        </Link>
    </NavigationMenuItem>
}

export default NavbarItem
