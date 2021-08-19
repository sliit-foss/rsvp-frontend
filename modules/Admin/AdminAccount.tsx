import { useState,useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import NextImage from '../../components/NextImage'
import user from '../../public/admin/account/user.svg'
import email from '../../public/admin/account/email.svg'
import key from '../../public/admin/account/key.svg'
import { useGetUser } from '../../queries/useGetUser'
import LoadingIndicator from '../../components/Admin/LoadingIndicator'
import ChangePasswordForm from '../../components/Admin/ChangePasswordForm'

const AdminAccount = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  const [resetPasswordVisilibity, setResetPasswordVisilibity] = useState(false)
  const toggleVisibility = function () {
    setResetPasswordVisilibity(!resetPasswordVisilibity)
  }

  const { data: userData, isSuccess } = useGetUser()
  return (
    <div className="h-84vh">
      <div
        className={`bg-black fixed w-full h-full top-0 left-0 z-20 transition ease-in duration-200 pointer-events-none ${
          resetPasswordVisilibity ? 'opacity-30' : 'opacity-0 '
        }`}
      ></div>
      <div className="h-0 flex flex-col justify-center items-center">
        <ChangePasswordForm
          show={resetPasswordVisilibity}
          toggleFunction={toggleVisibility}
        />
      </div>
      {isSuccess && userData ? (
        <div
          className="h-full flex flex-col justify-center items-center"
          onClick={resetPasswordVisilibity ? toggleVisibility : () => null}
        >
          <div className="w-10/12 h-20 md:h-14 mt-16 mb-16 md:mb-20 bg-gradient-to-r from-purple-light to-purple-dark rounded-lg flex justify-center items-center" data-aos="fade-down">
            <div className="text-2xl md:text-3xl text-white font-medium text-center">
              Account Info
            </div>
          </div>
          <div className="w-10/12 h-full md:h-auto flex flex-col md:flex-row justify-center md:justify-between items-center mb-16">
            {/* User */}
            <div className="w-10/12 md:w-15vw h-full md:h-15vw mb-10 md:mb-0" data-aos="fade-right">
            <div className="h-full w-full relative group bg-purple-light flex items-center justify-center rounded-xl transition cursor-default transform hover:scale-105 shadow-lg hover:shadow-xl transition ease-in duration-200">
              <NextImage
                classnames="flex items-center justify-center w-4/12 sm:w-3/12 md:w-7/12 2xl:w-10/12 p-1 sm:p-2 md:p-0"
                src={user}
                alt="image"
                layout="intrinsic"
                quality={90}
              />
              <div className="absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-purple-light to-purple-dark rounded-xl md:group-hover:p-4 group-hover:opacity-100 opacity-0">
                <h2
                  className="text-base sm:text-xl md:text-xl font-bold text-white  text-center "
                  style={{ wordWrap: 'break-word' }}
                >
                  {userData.username}
                </h2>
              </div>
            </div>
            </div>
       
            {/* Email */}
            <div className="w-10/12 md:w-15vw h-full md:h-15vw mb-10 md:mb-0" data-aos="fade">
            <div className="h-full w-full relative group bg-purple-light flex items-center justify-center rounded-xl cursor-default transform hover:scale-105 shadow-lg hover:shadow-xl transition ease-in duration-200">
              <NextImage
                classnames="flex items-center justify-center w-3/12 sm:w-2/12 md:w-6/12 2xl:w-10/12"
                src={email}
                alt="image"
                layout="intrinsic"
                quality={90}
              />
              <div className="absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-purple-light to-purple-dark rounded-xl md:group-hover:p-4 group-hover:opacity-100 opacity-0">
                <h2
                  className="text-base sm:text-xl md:text-xl font-bold text-white text-center w-11/12"
                  style={{ wordWrap: 'break-word' }}
                >
                  {userData.email}
                </h2>
              </div>
            </div>
            </div>
            {/* Password */}
            <div className="w-10/12 md:w-15vw h-full md:h-15vw" data-aos="fade-left">
            <div className="h-full w-full relative group bg-purple-light flex items-center justify-center rounded-xl cursor-default transform hover:scale-105 shadow-lg hover:shadow-xl transition ease-in duration-200">
              <NextImage
                classnames="flex items-center justify-center w-3/12 sm:w-2/12 md:w-6/12 2xl:w-10/12"
                src={key}
                alt="image"
                layout="intrinsic"
                quality={90}
              />
              <div className="absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-purple-light to-purple-dark rounded-xl md:group-hover:p-4 group-hover:opacity-100 opacity-0">
                <button
                  className="text-base sm:text-xl md:text-xl font-bold text-white border-2 border-white hover:bg-purple-dark transition ease-in rounded-md shadow py-1 px-4"
                  onClick={toggleVisibility}
                >
                  Reset Password
                </button>
              </div>
            </div>
            </div>
          </div>
          <div className="w-8/12 sm:w-3/12 h-20 md:h-14 mb-16" data-aos="fade-up">
          <div className="bg-purple-light rounded-lg h-full w-full flex justify-center items-center shadow-lg hover:shadow-xl cursor-default transform hover:scale-105 transition ease-in duration-200">
            <div className="text-xl md:text-2xl text-white font-bold text-center">
              {userData.faculty}
            </div>
          </div>
          </div>
         
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  )
}

export default AdminAccount
