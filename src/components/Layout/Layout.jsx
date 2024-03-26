import Home from '../../pages/Home/Home.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
   	<NavBar/>
   	<Outlet/>
    </div>
  )
}

export default Layout