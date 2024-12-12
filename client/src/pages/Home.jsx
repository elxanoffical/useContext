import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalContext from '../context/globalContext'

const Home = () => {

    const [theme,setTheme] = useState('light')
    const [language,setLanguage] = useState('az')

    const data = {
        theme,
        setTheme,
        language,
        setLanguage
    }
    
  return (
    <GlobalContext.Provider value={data}>
        <Header  />
        home
        <Footer />
    </GlobalContext.Provider>
  )
}

export default Home