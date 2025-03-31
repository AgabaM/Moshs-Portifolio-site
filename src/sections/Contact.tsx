import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg'

 const ContactSection = () => {
  const whatsappLink = 'https://wa.me/0703848753';
   return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
     <div className='container'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 w-80 md:w-full'>
        <div className='absolute inset-0 opacity-5 -z-10' 
        style={{
              backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
          <div>
        <h2 className='font-serif text-2xl font-semibold md:text-3xl'>Let's create something amazing together</h2>
    <p className='text-sm md:text-xl mt-2'>
      Ready to bring your next project to life? Let's connect and discuss how I can help your
    achieve your goals. 
    </p>
    </div>
    <div>
    <a
      href={whatsappLink}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security best practices
    >
      <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950'>
        <span className='font-semibold'>Contact Me</span>
        <ArrowUpRightIcon className="size-4" />
      </button>
    </a>
    </div>
    </div>
    </div>
  </div>
  </div>
    
   )
 }
 export default ContactSection