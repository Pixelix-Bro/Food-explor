import { Outlet, useLocation, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout() {
  const location = useLocation()
  const { id } = useParams()
  return (
    <div>
      {location.pathname === '/login' || location.pathname === '/register' ? '' : <Navbar />}
      <main className={location.pathname === '/' ? 'pt-[120px]' : 'pt-0'}>
        <Outlet />
      </main>
      {location.pathname === '/login' || location.pathname === '/register' ? '' : <Footer />}
    </div>
  )
}
