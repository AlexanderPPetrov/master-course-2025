import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type AppContextType = {
    theme: string
    setTheme: (value: string) => void
    isLight: () => boolean
    getThemeColors: () => string
    getTextColor: () => string
    getBackgroundColor: () => string
}

const AppContext = createContext<AppContextType>({
    theme: 'light',
    setTheme: () => {},
    isLight: () => true,
    getThemeColors: () => 'text-gray-800 bg-white',
    getTextColor: () => 'text-gray-800',
    getBackgroundColor: () => 'bg-white',
})

type Props = {
    children: ReactNode
}
function ApplicationProvider({children} : Props) {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if(isLight()) {
            document.body.classList.add('bg-gray-100');
            document.body.classList.remove('bg-slate-900');
        } else {
            document.body.classList.remove('bg-gray-100');
            document.body.classList.add('bg-slate-900');
        }
    }, [theme])

    function isLight() {
        return theme === 'light'
    }

    function getThemeColors() {
        return `${getTextColor()} ${getBackgroundColor()}`
    }

    function getTextColor() {
        return isLight() ? 'text-gray-800' : 'text-white'
    }

    function getBackgroundColor() {
        return isLight() ? 'bg-white' : 'bg-gray-800'
    }

    return <AppContext.Provider value={{ 
                                        theme, 
                                        setTheme,
                                        isLight,
                                        getThemeColors,
                                        getTextColor,
                                        getBackgroundColor,
                                       }}>
        { children }
    </AppContext.Provider>
}

export default ApplicationProvider

export function useAppContext() {
    return useContext(AppContext)
}