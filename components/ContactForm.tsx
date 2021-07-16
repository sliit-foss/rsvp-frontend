import Image from 'next/image'
import Container from './Layout/Container'
import { HiArrowRight } from 'react-icons/hi'
import ContactVector from '../public/contact/ContactVector.svg'

const ContactForm = (): JSX.Element => {
  return (
    <div>
      <Container>
        <div className='flex flex-col bg-blue'>
          <div className='w-full mb-16 mt-20'>
            <h1
              className='flex flex-row items-center text-3xl
            font-semibold'
            >
              Contact Us{''}
              <span className='inline-block'>
                <HiArrowRight className='ml-3' />
              </span>
            </h1>
          </div>
          <div className='flex flex-row w-full bg-redAccent'>
            <div>
              <h1>Madhua</h1>
            </div>
            <div>
              <Image src={ContactVector} alt='contact vector' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactForm
