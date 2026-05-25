import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CharacterPage from './pages/CharacterPage'

function ScrollRestorer() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanlines"     aria-hidden="true" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestorer />
      <Layout>
        <Routes>
          <Route path="/"               element={<HomePage />}     />
          <Route path="/character/:id"  element={<CharacterPage />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
