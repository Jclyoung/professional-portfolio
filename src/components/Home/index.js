import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-cropp.png'

const Home = () => {
  return (
    <div className='container home-page'>
      <section className='animated-text'>
        <h1>Hi, <br />I'm
          <img src={ LogoTitle } alt='developer' />
          ennifer Young
          <br />
          web developer
          <br />
        </h1>
        <h2>Frontend Developer / JavaScript & React Expert</h2>
        <Link to='/contact' className='flat-button'>Contact Me</Link>
      </section>
    </div>
  )
}

export default Home
