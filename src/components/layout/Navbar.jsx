import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../images-folder/logo.svg';

function Navbar() {
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
    </nav>
  )
}

export default Navbar