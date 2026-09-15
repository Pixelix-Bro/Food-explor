import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout() {
  const location = useLocation()
  return (
    <div>
      {location.pathname === '/login' || location.pathname === '/register' ? '' : <Navbar />}
      <main>
        <Outlet />
      </main>
      {location.pathname === '/login' || location.pathname === '/register' ? '' : <Footer />}
    </div>
  )
}
