import { Outlet, useLocation, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout() {
  const location = useLocation()
  const { id } = useParams()
  return (
    <div>
      {location.pathname === '/login' || location.pathname === '/register' ? '' : <Navbar />}
      <main className={`${location.pathname === `/product${id}` ? 'pt-[320px]' : 'pt-0 pb-0'}`}>
        <Outlet />
      </main>
      {location.pathname === '/login' || location.pathname === '/register' ? '' : <Footer />}
    </div>
  )
}
