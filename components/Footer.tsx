import Image from 'next/image'
import fossLogo from '../public/logos/foss_light.svg'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaRegEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='lg:flex lg:flex-row bg-gradient-to-r from-gradientBlue to-gradientPurple'>
      <div className='sm:w-full lg:w-1/3'>
        <div>
          <Image src={fossLogo} width='168' height='168' alt='Foss Logo' />
        </div>
        <div className='relative -top-8'>
          <div>
            <p className='pl-10 pr-10 text-white mb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque
              voluptatum iure veniam praesentium enim iusto est, omnis tenetur
              reiciendis harum, perferendis porro alias dicta, impedit
              temporibus! Dolores, totam exercitationem?
            </p>
          </div>
          <div className='pl-10 pr-10 text-white mb-3 '>
            <h4 className='text-xl font-bold mb-3'>Foloow Us</h4>
            <div className='sm:mb-3 md:mb-3 flex flex-row'>
              <FaFacebook className='colorIcon mb-3 mr-3' size='22' />
              <FaInstagram className='colorIcon mb-3  mr-3' size='22' />
              <FaLinkedin className='colorIcon mb-3  mr-3' size='22' />
              <FaTwitter className='colorIcon mb-3  mr-3' size='22' />
            </div>
          </div>
        </div>
      </div>

      <div className='relative sm:w-full lg:w-1/3'>
        <div className='w-full h-1/4'>
          <div className='lg:pt-14'>
            <h4 className='relative left-10 w-1/2 sm:w-1/2 md:w-1/2 text-xl font-bold mb-1 text-white'>
              Useful Links
            </h4>
            <span className='absolute left-10 w-16 bg-white h-1 rounded-xl' />
          </div>
        </div>
        <div className='w-full h-4/6'>
          <div className='flex flex-row w-full text-white pl-10 pr-10'>
            <div className='sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-1/2'>
              <ul>
                <li className='pt-3 pb-3'>Home</li>
                <li className='pt-3 pb-3'>Clubs</li>
                <li className='pt-3 pb-3'>About Us</li>
                <li className='pt-3 pb-3'>Contact Us</li>
                <li className='pt-3 pb-3'>Events</li>
              </ul>
            </div>
            <div className='sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-1/2'>
              <ul>
                <li className='pt-3 pb-3'>Home</li>
                <li className='pt-3 pb-3'>Clubs</li>
                <li className='pt-3 pb-3'>About Us</li>
                <li className='pt-3 pb-3'>Contact Us</li>
                <li className='pt-3 pb-3'>Events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='relative sm:w-full lg:w-1/3'>
        <div className='w-full h-1/4 md:mb-4 lg:mb-3'>
          <div className='lg:pt-14 pb-5'>
            <h4 className='relative left-10 w-1/2 sm:w-1/2 md:w-1/2 text-xl font-bold mb-1 text-white'>
              Subcribe
            </h4>
            <span className='absolute left-10 bg-white w-16 h-1 rounded-xl' />
          </div>
        </div>
        <div className='w-full h-4/6 sm:mt-5 md:mt-5'>
          <div className='flex flex-row w-full text-white pl-10 pr-10'>
            <div className='sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-full'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                incidunt ea quisquam impedit deleniti illum quis libero
                blanditiis non architecto quidem praesentium amet voluptas ab
                cupiditate, suscipit neque ut pariatur?
              </p>
              <div className='flex flex-row item-center mb-5'>
                <input
                  type='email'
                  placeholder='Email Address'
                  required
                  className='p-2 mt-5 w-3/4 rounded-lg block text-black shadow-md'
                />
                <button className='w-11 h-11 group bg-blue mt-5 shadow-md hover:bg-gradientPurple duration-150 transition ease-in font-medium rounded-lg block relative -left-7'>
                  <FaRegEnvelope
                    className='transform -rotate-12 group-hover:rotate-0 transition ease-in relative top-0 left-0 right-0 bottom-0 m-auto'
                    size='25'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
