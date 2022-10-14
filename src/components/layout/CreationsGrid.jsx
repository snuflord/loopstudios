import image1 from '../../images-folder/desktop/image-deep-earth.jpg'
import image_one from '../../images-folder/mobile/image-deep-earth.jpg'
import image2 from '../../images-folder/desktop/image-night-arcade.jpg'
import image_two from '../../images-folder/mobile/image-night-arcade.jpg'
import image3 from '../../images-folder/desktop/image-curiosity.jpg'
import image_three from '../../images-folder/mobile/image-curiosity.jpg'
import image4 from '../../images-folder/desktop/image-fisheye.jpg'
import image_four from '../../images-folder/mobile/image-fisheye.jpg'
import image5 from '../../images-folder/desktop/image-from-above.jpg'
import image_five from '../../images-folder/mobile/image-from-above.jpg'
import image6 from '../../images-folder/desktop/image-soccer-team.jpg'
import image_six from '../../images-folder/mobile/image-soccer-team.jpg'
import image7 from '../../images-folder/desktop/image-grid.jpg'
import image_seven from '../../images-folder/mobile/image-grid.jpg'
import image8 from '../../images-folder/desktop/image-pocket-borealis.jpg'
import image_eight from '../../images-folder/mobile/image-pocket-borealis.jpg'

function CreationsGrid() {
  return (
    <section id="creations">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-2">
            
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-4xl text-center uppercase md:text-left underline underline-offset-8 md:text-5xl">
                    Our Creations
                </h2>
                <button className="hidden btn md:block">See All</button>
            </div>
            
            <div className="grid grid-cols-1 text-2xl w-full justify-between text-white uppercase md:grid-cols-4 gap-4">
                <div className="relative group overflow-hidden">
                    <img src={image1} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_one} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>Hello Earth</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
                <div className="relative group overflow-hidden">
                    <img src={image2} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_two} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>Strange Games</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
                <div className="relative group overflow-hidden">
                    <img src={image3} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_three} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>To Mars</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
                <div className="relative group overflow-hidden">
                    <img src={image4} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_four} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>Worldbend</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
                <div className="relative group overflow-hidden">
                    <img src={image5} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_five} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>Infinite highway</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
                <div className="relative group overflow-hidden">
                    <img src={image6} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_six} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>Play of the game</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
                <div className="relative group overflow-hidden">
                    <img src={image7} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_seven} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>Moto Cross</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
                <div className="relative group overflow-hidden">
                    <img src={image8} alt="" className="relative w-full hidden md:block transition duration-500 ease-in-out group-hover:scale-110" />
                    <img src={image_eight} alt="" className="relative w-full md:hidden transition duration-500 ease-in-out group-hover:scale-110" />
                    <div className='absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-end'>
                        <h5 className='duration-200 md:pr-10 group-hover:hidden'>Nordic nights</h5>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500 to-blue-500 opacity-10 transition duration-500 group-hover:opacity-0"></div>
                </div>
            </div>
            
            <div className='flex justify-center mt-10 md:hidden'>
                <button className="btn w-full md:hidden">See All</button>
            </div>
        </div>
    </section>
  )
}

export default CreationsGrid