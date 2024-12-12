import React, { useContext } from 'react'
import GlobalContext from '../context/globalContext'

const Header = () => {
  const { theme, language, setTheme, setLanguage } = useContext(GlobalContext)
  return (
    <div>
      <h2>Header</h2>
      <h3>Theme: {theme}</h3>
      <h2>language: {language}</h2>
      <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}> change theme</button>
      <button onClick={() => setLanguage(language == 'az' ? 'ru' : 'az')}>change language</button>
      <p>----------------------</p>
    </div>
  )
}


export default Header