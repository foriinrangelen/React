import React, { useState } from 'react'
import Page from './pages/Page'
import "./App.css"
import { ThemeContext } from './content/ThemeContent'
const Ex02 = () => {

    const [isDark, setIsDark] = useState(false)
    const [user, setUser] = useState("김유열")
    console.log("다크모드상태", isDark)
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, user, setUser }}>
            <Page />
        </ThemeContext.Provider>
    )
}

export default Ex02