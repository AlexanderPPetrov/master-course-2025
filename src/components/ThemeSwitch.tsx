import { useAppContext } from "@/providers/ApplicationProvider"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ThemeSwitch() {
    const { setTheme, isLight, getTextColor } = useAppContext()

    function getIcon() {
        return isLight() ? <MdDarkMode/> : <CiLight/>
    }

    function toggleTheme() {
        const newTheme = isLight() ? 'dark' : 'light'
        setTheme(newTheme)
    }
    return <div onClick={toggleTheme} className={getTextColor()}>
        { getIcon() }
    </div>
}

export default ThemeSwitch