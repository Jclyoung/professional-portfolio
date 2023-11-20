import './index.scss'
import { Link } from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoJ} alt='logo' />
      <img src={LogoSubtitle} alt='jennifer young' />
    </Link>
  </div>
}

export default Sidebar
