import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Container from '../Layout/Container'
import { HiArrowRight } from 'react-icons/hi'
import ContactVector from '../../public/contact/ContactVector.svg'
import { MailEndpoints } from '../../pages/api/mail'
import LoadingOverlay from '../Common/LoadingOverlay'
import Swal from 'sweetalert2'

const ContactForm = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])

  const [showLoading, setShowLoading] = useState(false)

  const sendMail = (event: any) => {
    event.preventDefault()
    setShowLoading(true)

    const mailData = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      text: event.target.body.value,
      receiver: 'infosliitfoss@gmail.com',
    }
    MailEndpoints.sendMail(mailData)
      .then(() => {
        setShowLoading(false)
        Swal.fire({
          icon: 'success',
          title: `<div class="text-2xl">Message sent sucessfully</div>`,
          showConfirmButton: false,
          timer: 1500,
        })
      })
      .catch((e) => {
        const error = JSON.parse(e).data.error
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          title: `<div class="text-2xl">${error}</div>`,
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  return (
    <>
      <LoadingOverlay show={showLoading} />
      <div>
        <Container>
          <div className="flex flex-col">
            <div className="w-full mb-16 mt-20">
              <h1
                className="flex flex-row items-center text-3xl
            font-semibold"
                data-aos="fade-right"
              >
                Contact Us{''}
                <span className="inline-block">
                  <HiArrowRight className="ml-3" />
                </span>
              </h1>
            </div>

            <div className="sm:grid sm:grid-cols-1 sm:w-full lg:flex lg:flex-row w-full h-auto mb-12">
              <div className="lg:w-1/2 sm:w-full h-auto " data-aos="fade-right">
                <div className="sm:w-full md:w-1/2 lg:w-1/2 text-gray-default font-semibold mb-8">
                  <h5>
                    Fill up the form and our Team will get back to you within 24
                    hours.
                  </h5>
                </div>
                <div className="grid justify-center items-center mb-12">
                  <Image
                    src={ContactVector}
                    alt="contact vector"
                    height="300"
                  />
                </div>
              </div>

              <div
                className="flex flex-col justify-center sm:w-full md:w-full lg:w-1/2 h-auto"
                data-aos="fade-left"
              >
                <div className="bg-white rounded-2xl shadow-ds2 hover:shadow-ds3 pt-12 pb-12 transition duration-500">
                  <Container>
                    <div className="px-5 lg:px-8">
                      <div className="h-14 text-center text-blue text-2xl font-bold">
                        <h4>Message Us</h4>
                      </div>
                      <form onSubmit={sendMail} id="contactForm">
                        <div className="flex flex-col lg:flex lg:flex-row md:flex md:flex-col justify-between w-full rounded-xl">
                          <input
                            id="name"
                            className="bg-white border-none shadow-ds2 rounded-lg lg:w-72 md:w-full mr-0 lg:mr-3"
                            type="text"
                            placeholder="Name"
                          />
                          <input
                            id="email"
                            className="bg-white border-none shadow-ds2 rounded-lg lg:w-72 md:w-full mt-5 lg:mt-0 ml-0 lg:ml-3"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                        <div className="grid grid-cols-1 mt-5">
                          <input
                            id="subject"
                            className="bg-white border-none shadow-ds2 rounded-lg"
                            type="text"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="grid grid-cols-1 mt-5">
                          <textarea
                            id="body"
                            className="bg-white border-none shadow-ds2 h-40 rounded-lg"
                            placeholder="Message"
                          />
                        </div>
                        <div className="grid grid-cols-1 mt-5">
                          <button
                            type="submit"
                            form="contactForm"
                            className="lg:w-1/4 md:w-1/4 sm:w-1/3 rounded-lg p-2 text-white
                              font-semibold bg-lightBlue m-auto hover:bg-gradientPurple shadow-lg hover:shadow-xl duration-200 transition ease-in
                              "
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ContactForm
