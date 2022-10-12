import logo from '../../images-folder/logo.svg'
import {Link} from 'react-router-dom'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram} from 'react-icons/fa'

function Footer() {
 
  const footerYear = new Date().getFullYear()

  return (
    <footer className="bg-black">
        <div className="container text-white max-w-6xl mx-auto py-10 px-6">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
                <div className="flex-col">
                    <img className='py-6' src={logo}></img>
                    <div className="flex flex-col justify-center items-center md:flex-row">
                        <Link to='about' className="font-bold py-3 text-lg border-b border-transparent hover:border-white transition duration-500 md:pr-3">About</Link>
                        <Link to='careers' className="font-bold py-3 text-lg border-b border-transparent hover:border-white transition duration-500 md:pr-3">Careers</Link>
                        <Link to='events' className="font-bold py-3 text-lg border-b border-transparent hover:border-white transition duration-500 md:pr-3">Events</Link>
                        <Link to='products' className="font-bold py-3 text-lg border-b border-transparent hover:border-white transition duration-500 md:pr-3">Products</Link>
                        <Link to='support' className="font-bold py-3 text-lg border-b border-transparent hover:border-white transition duration-500 md:pr-3">Support</Link>
                    </div>
                </div>

                <div className="flex-col">
                    <div className="h-8 py-6 text-2xl">
                        <div className="flex items-center justify-center space-x-4 md:justify-end">
                            <Link to='/'><FaFacebook className='hover:text-blue-500 h-6'/></Link>
                            <Link to='/'><FaTwitter className='hover:text-blue-300 h-6'/></Link>
                            <Link to='/'><FaPinterest className='hover:text-red-500 h-6'/></Link>
                            <Link to='/'><FaInstagram className='hover:text-purple-500 h-6'/></Link>
                        </div>
                    </div>
                    <p className='py-3 font-extralight text-gray-400'>Copyright &copy; JoeB {footerYear}</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer