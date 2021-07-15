import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const InfoCards = (): JSX.Element => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 bg-white w-full mt-10 mb-10">
        <div
          className="grid grid-cols-1 justify-center items-center rounded-lg
      text-center shadow-infoCard lg:m-auto md:m-auto mb-5 sm:w-full lg:w-48 md:w-48 h-44
       bg-white"
        >
          <div>
            <div className="flex justify-center mb-3 mt-3">
              <FaMapMarkerAlt size="25" />
            </div>
            <p className="font-bold mt-3">Our Address</p>
            <p className="font-normal mt-3">SLIIT Malabe</p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 justify-center items-center rounded-lg
      text-center shadow-infoCard lg:m-auto md:m-auto mb-5 sm:w-full lg:w-48 md:w-48 h-44
      bg-white"
        >
          <div>
            <div className="flex justify-center mb-3 mt-3">
              <FaEnvelope size="25" />
            </div>
            <p className="font-bold mt-3">Email Us</p>
            <p className="font-normal mt-3">infosliitfoss@gmail.com</p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 justify-center items-center rounded-lg
      text-center shadow-infoCard lg:m-auto md:m-auto mb-5 sm:w-full lg:w-48 md:w-48 h-44
      bg-white"
        >
          <div>
            <div className="flex justify-center mb-3 mt-3">
              <FaPhoneAlt size="25" />
            </div>
            <p className="font-bold mt-3">Call Us</p>
            <p className="font-normal mt-3">+94775633985</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCards
