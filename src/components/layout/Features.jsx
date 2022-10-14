import vrimage from '../../images-folder/desktop/image-interactive.jpg'

function Features() {
  return (
    <>
    <section className="container relative flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <img src={vrimage} alt="vr headset" className='rounded-2xl'/>

        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20 rounded-2xl">
            <h2 className='max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left'>The leader in interactive VR</h2>
            <p className="max-w-md text-xl text-center md:text-left pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus error velit dolorem nisi quasi deleniti ut odit, officia voluptate natus cum rerum totam, aliquid iste neque! Voluptatibus dolore atque velit eos dolor! Blanditiis, dolore itaque.</p>
        </div>
    </section>
    </>
  )
}

export default Features