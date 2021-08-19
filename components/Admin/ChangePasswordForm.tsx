import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import LoadingOverlay from '../LoadingOverlay'
import FailedSnackbar from '../Common/Snackbars/FailedSnackbar'
import SuccessSnackbar from '../Common/Snackbars/SuccessSnackbar'
import { UserEndpoints } from '../../pages/api/user'
interface ContentProps {
  show: boolean
  toggleFunction: () => void
}

export default function Content(props: ContentProps): JSX.Element {
  const [newPassword, setNewPassword] = useState('')
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSignInSubmitAction = (event: any) => {
    event.preventDefault()
    setShowLoading(true)

    UserEndpoints.changePassword(newPassword)
      .then(() => {
        setOpenSuccessSnackbar(true)
        setShowLoading(false)
        setNewPassword('')
        setTimeout(function () {
          setOpenSuccessSnackbar(false)
        }, 1500)
        setTimeout(function () {
          props.toggleFunction()
        }, 1800)
      })
      .catch((e) => {
        const error = JSON.parse(e)
        console.log(error)
        setErrorMessage(error.data.error)
        setOpenFailedSnackbar(true)
        setShowLoading(false)
        setTimeout(function () {
          setOpenFailedSnackbar(false)
        }, 1500)
      })
  }

  return (
    <>
      <LoadingOverlay show={showLoading} />
      <section
        className={
          props.show
            ? 'opacity-100 transition ease-in duration-200'
            : 'opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <div className="bg-white rounded-2xl shadow-xl px-10 md:px-12 py-10 pb-0 md:pb-10 justify-center items-center fixed top-3/4 md:top-1/2 left-7/12 transform -translate-x-2/4 -translate-y-full md:-translate-y-2/4 z-40">
          <div className="w-full flex flex-row justify-end">
            <div
              className="mr-0 md:mr-5 m-5 my-2 mt-0 cursor-pointer transform hover:scale-105 transition ease-in duration-100 fill-current text-purple-light hover:text-gray-800"
              onClick={props.toggleFunction}
            >
              <AiOutlineClose size={40} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-3xl font-bold md:text-left text-center text-purple-dark mt-2 mb-5 ">
              Reset Password
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row mt-2 mb-6">
              <input
                type="password"
                id="password"
                name="name"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value)
                }}
                className="w-full bg-white rounded border border-gray-300 focus:purple-light focus:ring-2 focus:ring-purple-light text-base outline-none text-gray-700 py-1 px-3 mb-5 md:mb-0  leading-8 shadow-lg transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-0 md:mt-3 mb-10 md:mb-0 pb-10 md:pb-0 justify-center">
            <button
              className="text-white bg-purple-light border-0 py-2 px-14 focus:outline-none shadow-md hover:shadow-lg hover:bg-purple-dark rounded text-lg mb-6 md:mb-0 transition ease-in duration-200"
              onClick={onSignInSubmitAction}
            >
              Reset
            </button>
          </div>
        </div>
      </section>
      <div
        className={
          openFailedSnackbar
            ? 'fixed top-24 md:top-3/4 w-full flex justify-center z-40 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 w-full flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <FailedSnackbar message={errorMessage} />
      </div>
      <div
        className={
          openSuccessSnackbar
            ? 'fixed top-24 md:top-3/4 w-full flex justify-center z-40 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 w-full flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <SuccessSnackbar
          message={'Your password has been reset successfully'}
        />
      </div>
    </>
  )
}
