import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import NextImage from '../../components/Common/NextImage'
import user from '../../public/admin/account/user.svg'
import email from '../../public/admin/account/email.svg'
import key from '../../public/admin/account/key.svg'
import { useGetUser } from '../../queries/useGetUser'
import LoadingIndicator from '../../components/Admin/Layout/LoadingIndicator'
import LoadingOverlay from '../../components/Common/LoadingOverlay'
import Button from '../../components/Common/Button'
import { UserEndpoints } from '../../pages/api/user'
import Swal from 'sweetalert2'

const AdminAccount = (): JSX.Element => {
  const [newPassword, setNewPassword] = useState('')
  const [showLoading, setShowLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value.trim())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowLoading(true)

    UserEndpoints.changePassword(newPassword)
      .then(() => {
        setShowLoading(false)
        setNewPassword('')
        let timerInterval: any
        Swal.fire({
          icon: 'success',
          title:
            '<div class="text-2xl">Your password has been reset successfully</div>',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          toggleModal()
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

  const { data: userData, isSuccess } = useGetUser()
  return (
    <div className="h-84vh">
      <LoadingOverlay show={showLoading} />
      <div
        className={`bg-black fixed w-full h-full top-0 left-0 z-20 transition ease-in duration-200 pointer-events-none ${
          showModal ? 'opacity-50' : 'opacity-0 '
        }`}
      ></div>
      {showModal && (
        <div className="fixed z-40 top-0 bottom-0 right-0 left-0 w-full h-full pointer-events-none">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="absolute z-50 top-1/2 left-1/2 md:left-6/10 transform -translate-x-1/2 -translate-y-1/2 bg-white w-72 md:w-96 mx-auto md:mx-0 rounded-lg p-4 px-6 pointer-events-auto"
          >
            <div className="inline-flex items-center justify-end w-full mb-4">
              <button onClick={toggleModal}>
                <div className="cursor-pointer transform hover:scale-105 transition ease-in duration-100 fill-current text-purple-dark hover:text-gray-800">
                  <AiOutlineClose size={30} />
                </div>
              </button>
            </div>
            <div className="inline-flex items-center justify-center w-full mb-4">
              <h2 className="font-semibold text-xl sm:text-2xl text-purple-dark">
                Change Password
              </h2>
            </div>
            <input
              onChange={handleInputChange}
              className="rounded-md mb-6 shadow-ds2 border-0 placeholder-gray-400 w-full py-2 px-3 "
              placeholder="New Password"
              type="password"
              name="password"
            />

            <Button value="Update" width="w-full" type="submit" />
            <div className="h-4"></div>
          </form>
        </div>
      )}
      {isSuccess && userData ? (
        <div
          className="h-full flex flex-col justify-center items-center"
          onClick={showModal ? toggleModal : () => null}
        >
          <div
            className="w-10/12 h-20 md:h-14 mt-16 mb-16 md:mb-20 bg-gradient-to-r from-purple-light to-purple-dark rounded-lg flex justify-center items-center cursor-default"
            data-aos="fade-down"
          >
            <div className="text-2xl md:text-3xl text-white font-medium text-center">
              Account Info
            </div>
          </div>
          <div className="w-10/12 h-full md:h-auto flex flex-col md:flex-row justify-center md:justify-between items-center mb-16">
            {/* User */}
            <div
              className="w-10/12 md:w-15vw h-full md:h-15vw mb-10 md:mb-0"
              data-aos="fade-right"
            >
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
            <div
              className="w-10/12 md:w-15vw h-full md:h-15vw mb-10 md:mb-0"
              data-aos="fade"
            >
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
            <div
              className="w-10/12 md:w-15vw h-full md:h-15vw"
              data-aos="fade-left"
            >
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
                    onClick={toggleModal}
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-8/12 sm:w-3/12 h-20 md:h-14 mb-16"
            data-aos="fade-up"
          >
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
