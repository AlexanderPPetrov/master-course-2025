import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
import NavbarItem from "./NavbarItem"

function Navbar() {
    return <NavigationMenu className="mt-3">
    <NavigationMenuList>
      <NavbarItem to="/" title={"Начало"}/>
      <NavbarItem to="/students" title={"Студенти"}/>
      <NavbarItem to="/movies" title={"Филми"}/>
      <NavbarItem to="/books" title={"Книги"}/>
    </NavigationMenuList>
  </NavigationMenu>
}  

export default Navbar