import Home from '../../pages/Home/Home.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const Layout = () => {
  return (
    <div>
   	<NavBar/>
   	<Outlet/>
    <Toaster/>
    </div>
  )
}

export default Layout