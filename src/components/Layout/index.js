import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <div className="App">
    <Sidebar />
      <section className="page">
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </section>  
  </div>
  )
}

export default Layout
