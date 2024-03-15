import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sigdav from './komponenter/Sigdav'
import { Route, Routes } from 'react-router-dom'
import Forside from './sider/Forside'
import Omos from './sider/Omos'
import Produkt from './sider/Produkt'
import Kontakt from './sider/Kontakt'
import Navigation from './komponenter/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="omos" element={<Omos />} />
        <Route path="produkt" element={<Produkt />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
