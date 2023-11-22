import './index.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-cropp.png'
import Letters from '../Letters'
import Logo from './Logo'

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      setCharClass('animate-text-hover')
    }, 5000)
  }, [])
  const [ charClass, setCharClass ] = useState( 'animate-text' );
  const nameArray = ['e','n','n','i','f','e','r',' ',':']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']
  return (
    <div className='container home-page'>
      <section className='animated-text'>
        <h1>
          <Letters
            charClass={ charClass }
            charArray={ [ 'H', 'i' ] }
            indx={11}
          />
          <br />
          <Letters
            charClass={ charClass }
            charArray={ [ 'I',"'",'m' ] }
            indx={13}
          />
          <img src={ LogoTitle } alt='developer' />
          <Letters
            charClass={ charClass }
            charArray={ nameArray }
            indx={ 15 }
          />
          <br />
          <Letters
            charClass={ charClass }
            charArray={ jobArray }
            indx={ 22 }
          />
          <br />
        </h1>
        <h2>Frontend Developer / JavaScript & React Expert</h2>
        <Link to='/contact' className='flat-button'>Contact Me</Link>
      </section>
      <Logo/>
    </div>
  )
}

export default Home
