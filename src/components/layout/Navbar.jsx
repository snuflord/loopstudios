import {Link} from 'react-router-dom'
import {useState} from 'react'
import { ReactComponent as Logo } from '../../images-folder/logo.svg';

function Navbar() {
    
    const [isActive, setIsActive] = useState(false)

    const handleClick = (e) => {

        setIsActive(on => !on)
    }

  return (
    <nav className="flex items-center justify-between text-2xl text-white">
        
        <Link to='/'>
            <Logo />
        </Link>
        
        <div className="hidden h-10 font-secondary md:flex md:space-x-8">
            <div className="group">
                <div className="mx-2 space-x-6">
                    <Link to='about' className="text-2xl py-3  border-b border-transparent hover:border-blue-200 transition duration-500">About</Link>
                    <Link to='careers' className="text-2xl py-3  border-b border-transparent hover:border-blue-200 transition duration-500">Careers</Link>
                    <Link to='events' className="text-2xl py-3  border-b border-transparent hover:border-blue-200 transition duration-500">Events</Link>
                    <Link to='products' className="text-2xl py-3  border-b border-transparent hover:border-blue-200 transition duration-500">Products</Link>
                    <Link to='support' className="text-2xl py-3  border-b border-transparent hover:border-blue-200 transition duration-500">Support</Link>
                </div>
            </div>
        </div>
        {/* Hamburger button */}

        <div className="md:hidden">
            <button id='menu-btn' type='button' onClick={handleClick} className={isActive ? 'open z-50 block hamburger md:hidden focus:outline-none' : 'z-50 block hamburger md:hidden focus:outline-none'}>
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
            </button>
        </div>
        {/* Displaying mobile nav on mobile nav button click */}
        {isActive == true && 
            <div id="menu" className="fixed z-40 top-0 bottom-0 left-0 flex flex-col self-end md:hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
                    <Link to='about'>About</Link>
                    <Link to='careers'>Careers</Link>
                    <Link to='events'>Events</Link>
                    <Link to='products'>Products</Link>
                    <Link to='support'>Support</Link>
            </div>}
    </nav>
  )
}

export default Navbar