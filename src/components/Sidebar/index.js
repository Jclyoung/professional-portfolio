import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_ssub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return(
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoJ} alt='logo' />
        <img src={LogoSubtitle} className='sub-logo' alt='jennifer young' />
      </Link>
      <nav>
        <NavLink
          exact='true'
          activeclassname='active'
          to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
          exact='true'
          activeclassname='active'
          className='about-link'
          to='/contact'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
          exact='true'
          activeclassname='active'
          className='contact-link'
          to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>  
      <ul>
        <li>
          <a
            target='blank'
            rel='noreferer'
            href='https://www.linkedin.com/in/youngjenn/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            target='blank'
            rel='noreferer'
            href='https://github.com/Jclyoung'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
                <li>
          <a
            target='blank'
            rel='noreferer'
            href='skype:live:digitalunicorn'>
            <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
          </a>
        </li> 
      </ul>
    </div>
  )
  
}

export default Sidebar;
