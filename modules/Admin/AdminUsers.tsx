import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { MdDelete, MdEmail } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { FaSchool } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Button from '../../components/Common/Button'
import LoadingOverlay from '../../components/Common/LoadingOverlay'
import FailedSnackbar from '../../components/Common/Snackbars/FailedSnackbar'
import SuccessSnackbar from '../../components/Common/Snackbars/SuccessSnackbar'
import LoadingIndicator from '../../components/Admin/Layout/LoadingIndicator'
import { useGetAllUsers } from '../../queries/useGetUser'
import { UserEndpoints } from '../../pages/api/user'

const AdminUsers = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  const { data: users, isSuccess } = useGetAllUsers()
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    faculty: '',
  })

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSelectChange =
    () => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
      })
    }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowLoading(true)

    UserEndpoints.createUser(formData)
      .then(() => {
        setSuccessMessage('User added successfully')
        setOpenSuccessSnackbar(true)
        setShowLoading(false)
        setFormData({
          username: '',
          email: '',
          role: '',
          faculty: '',
        })
        setTimeout(function () {
          setOpenSuccessSnackbar(false)
        }, 1500)
        setTimeout(function () {
          toggleModal()
          if (process.browser) {
            window.location.reload()
          }
        }, 1800)
      })
      .catch((e) => {
        const error = JSON.parse(e).data.error
        switch (true) {
          case error == 'No username was given':
            setErrorMessage('Please enter a username')
            break
          case error.includes('Path `email` is required.'):
            setErrorMessage('Please enter an email')
            break
          case error.includes('email_1 dup key'):
            setErrorMessage('Email already exists')
            break
          case error.includes('Path `role` is required.'):
            setErrorMessage('Please select a user role')
            break
          case error.includes('Path `faculty` is required.'):
            setErrorMessage('Please select a faculty')
            break
          default:
            setErrorMessage(error)
            break
        }
        setOpenFailedSnackbar(true)
        setShowLoading(false)
        setTimeout(function () {
          setOpenFailedSnackbar(false)
        }, 1500)
      })
  }

  const deleteUser = (userId: string) => {
    setShowLoading(true)
    UserEndpoints.deleteUser(userId)
      .then(() => {
        setSuccessMessage('User removed successfully')
        setOpenSuccessSnackbar(true)
        setShowLoading(false)
        setTimeout(function () {
          setOpenSuccessSnackbar(false)
        }, 1500)
        if (process.browser) {
          window.location.reload()
        }
      })
      .catch((e) => {
        const error = JSON.parse(e).data.error
        setErrorMessage(error)
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
        className="p-4 sm:p-5 md:h-full min-h-84vh"
        onClick={showModal ? toggleModal : () => null}
      >
        <div
          className={`bg-black fixed w-full h-full top-0 left-0 z-20 transition ease-in duration-200 pointer-events-none ${
            showModal ? 'opacity-50' : 'opacity-0 '
          }`}
        ></div>
        {isSuccess && users ? (
          <>
            <div
              className="w-auto px-6 mt-4 mb-10 py-2 rounded-lg bg-purple-dark lg:opacity-0 cursor-default lg:h-0 lg:m-0 lg:p-0"
              data-aos="fade-right"
            >
              <div className="text-2xl text-white font-semibold text-left ">
                Users
              </div>
            </div>
            <div
              className="inline-flex items-center justify-end w-full mb-8 pr-4 lg:pr-0"
              data-aos="fade-left"
            >
              <Button value="Add User" onClick={toggleModal} />
            </div>
            <div
              className="hidden md:grid md:grid-rows-1 md:grid-cols-10 md:gap-4 bg-gradient-to-l from-purple-light to-purple-dark font-medium text-lg text-white p-4 md:px-8 rounded-t-xl shadow-lg mb-3"
              data-aos="fade-right"
            >
              <h3 className="md:col-span-2">Username</h3>
              <h3 className="md:col-span-3">Email</h3>
              <h3 className="md:col-span-3">Role</h3>
              <h3 className="md:col-span-1">Faculty</h3>
              <div className="md:col-span-1" />
            </div>
            {/* data goes here */}
            <div className="flex flex-col space-y-2 md:max-h-65vh pb-4 md:overflow-y-scroll scrollbar-hide">
              {users.map(({ _id, username, email, role, faculty }, i) => (
                <div
                  key={i}
                  className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 md:grid-cols-10 gap-2 sm:gap-4 rounded-sm shadow-lg p-4 md:px-8 justify-center items-center"
                  data-aos={i % 2 == 1 ? 'fade-right' : 'fade-left'}
                >
                  <p className="sm:col-span-3 md:col-span-2 font-semibold text-xl md:text-base text-gray-700">
                    {username}
                  </p>
                  <div className="sm:col-span-3 md:col-span-3 flex flex-row justify-start items-center">
                    <div className="w-27 md:w-0 md:h-0 mr-4 md:mr-0">
                      <MdEmail
                        className="text-gray-700 hover:text-purple-light transition ease-in duration-200 md:w-0 md:h-0 "
                        size={27}
                      />
                    </div>
                    <p
                      className="font-medium text-gray-700 w-3/4 md:w-full"
                      style={{ wordWrap: 'break-word' }}
                    >
                      {email}
                    </p>
                  </div>

                  <div className="sm:col-span-3 md:col-span-3 flex flex-row justify-start items-end">
                    <HiUserGroup
                      className="text-gray-700 hover:text-purple-light transition ease-in duration-200 md:w-0 md:h-0 mr-4 md:mr-0"
                      size={26}
                    />
                    <p className="font-medium text-md md:text-base text-gray-700">
                      {role}
                    </p>
                  </div>
                  <div className="sm:col-span-3 md:col-span-1 flex flex-row justify-start items-end mb-2 md:mb-0">
                    <FaSchool
                      className="text-gray-700 hover:text-purple-light transition ease-in duration-200 md:w-0 md:h-0 mr-4 md:mr-0"
                      size={26}
                    />
                    <p className="font-medium text-md md:text-base text-gray-700 ">
                      {faculty == 'SLIIT Cyber Security Community'
                        ? 'Cyber'
                        : faculty}
                    </p>
                  </div>
                  <button
                    className="sm:col-span-1 md:col-span-1 md:flex hidden items-center justify-center"
                    onClick={deleteUser.bind(this, _id)}
                  >
                    <MdDelete
                      className="text-lg hidden md:block text-gray-700 hover:text-red-500 transition ease-in duration-200"
                      size={32}
                    />
                  </button>
                  <button
                    className="sm:col-span-1 md:col-span-1 py-2 rounded-md bg-purple-light hover:bg-purple-dark text-white transition ease-in flex md:hidden items-center justify-center"
                    onClick={deleteUser.bind(this, _id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="h-84vh-32">
            <LoadingIndicator />
          </div>
        )}
      </section>
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
                Add User
              </h2>
            </div>
            <input
              onChange={handleInputChange}
              className="rounded-md mb-2 shadow-ds2 border-0 placeholder-gray-400 w-full"
              placeholder="Username"
              type="text"
              name="username"
            />
            <input
              onChange={handleInputChange}
              className="rounded-md mb-2 shadow-ds2 border-0 placeholder-gray-400 w-full"
              placeholder="Email"
              type="email"
              name="email"
            />
            <select
              className="rounded-md mb-2 shadow-ds2 border-0 placeholder-gray-400 w-full"
              name="role"
              onChange={handleSelectChange()}
            >
              <option value="" disabled selected>
                User Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Publisher">Event Publisher</option>
            </select>
            <select
              className="rounded-md mb-6 shadow-ds2 border-0 placeholder-gray-400 w-full"
              name="faculty"
              onChange={handleSelectChange()}
            >
              <option
                value=""
                disabled
                selected
                className="fill-current-color text-gray-400"
              >
                Faculty
              </option>
              <option value="FOSS">FOSS</option>
              <option value="FCSC">FCSC</option>
              <option value="SESC">SESC</option>
              <option value="MS Club">MS Club</option>
              <option value="Media Unit">Media Unit</option>
              <option value="SLIIT Cyber Security Community">
                SLIIT Cyber Security Community
              </option>
            </select>
            <Button value="Add User" width="w-full" type="submit" />
            <div className="h-4"></div>
          </form>
        </div>
      )}
      <div
        className={
          openFailedSnackbar
            ? 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-40 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <FailedSnackbar message={errorMessage} />
      </div>
      <div
        className={
          openSuccessSnackbar
            ? 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-40 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <SuccessSnackbar message={successMessage} />
      </div>
    </>
  )
}

export default AdminUsers
