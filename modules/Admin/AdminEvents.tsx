import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { useRouter } from 'next/router'
import { MdDelete } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { AiTwotoneEdit } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Button from '../../components/Button'
import LoadingOverlay from '../../components/LoadingOverlay'
import FailedSnackbar from '../../components/Common/Snackbars/FailedSnackbar'
import SuccessSnackbar from '../../components/Common/Snackbars/SuccessSnackbar'
import LoadingIndicator from '../../components/Admin/LoadingIndicator'
import { useGetEvents } from '../../queries/useGetEvent'
import { EventEndpoints } from '../../pages/api/event'

interface props {
  setSelectedModule: Dispatch<SetStateAction<string>>
  setSelectedEventId: any
}

const AdminEvents = ({
  setSelectedModule,
  setSelectedEventId,
}: props): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  const router = useRouter()
  const { data: eventList = [], isSuccess } = useGetEvents()
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    eventName: '',
    status: '',
    createdBy: '',
  })

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)

    //TODO: form handling logic goes here
  }

  const deleteEvent = (eventId: string) => {
    setShowLoading(true)
    EventEndpoints.deleteEvent(eventId)
      .then(() => {
        setSuccessMessage('Event deleted successfully')
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
      <section className="p-4 sm:p-5 md:h-full min-h-84vh">
        {isSuccess && eventList ? (
          <>
            <div
              className="w-auto px-6 mt-4 mb-10 py-2 rounded-lg bg-purple-dark lg:opacity-0 cursor-default lg:h-0 lg:m-0 lg:p-0"
              data-aos="fade-right"
            >
              <div className="text-2xl text-white font-semibold text-left ">
                Events
              </div>
            </div>
            <div
              className="inline-flex items-center justify-end w-full mb-8 pr-6 lg:pr-0"
              data-aos="fade-left"
            >
              <Button value="Add Event" onClick={toggleModal} />
            </div>
            <div
              className="hidden lg:grid lg:grid-rows-1 lg:grid-cols-12 lg:gap-4 bg-gradient-to-l from-purple-light to-purple-dark font-medium text-lg text-white p-4 px-8 rounded-t-xl shadow-lg mb-3"
              data-aos="fade-right"
            >
              <h3 className="lg:col-span-2">Event Name</h3>
              <h3 className="lg:col-span-2">Status</h3>
              <h3 className="lg:col-span-2">Created By</h3>
              <h3 className="lg:col-span-2">Details</h3>
              <h3 className="lg:col-span-2">Attendees</h3>
              <div className="lg:col-span-1" />
              <div className="lg:col-span-1" />
            </div>
            {/* data goes here */}
            <div className="flex flex-col space-y-2 pb-4 md:max-h-65vh md:overflow-y-scroll scrollbar-hide">
              {eventList.map(({ _id, name, status, createdBy }, i) => (
                <div
                  key={i}
                  className="grid grid-rows-1 grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 rounded-sm shadow-lg p-4 px-6 lg:px-8 justify-center items-center"
                  data-aos={i % 2 == 1 ? 'fade-right' : 'fade-left'}
                >
                  <p className="col-span-1 lg:col-span-2 font-semibold text-xl lg:text-base text-gray-700">
                    {name}
                  </p>
                  <div
                    className={`col-span-1 lg:col-span-2 w-full 2xl:w-3/4 px-4 py-1 font-semibold rounded lg:rounded-3xl shadow-md text-white text-base text-center filter hover:brightness-110 transition ease-in duration-150 cursor-default ${
                      status === 'Closed' || status === 'Cancelled'
                        ? 'bg-redAccent'
                        : status === 'Postponed'
                        ? 'bg-yellow-400'
                        : status === 'Upcoming'
                        ? 'bg-gradientBlue'
                        : 'bg-green-400'
                    }`}
                  >
                    {status}
                  </div>
                  <p className="col-span-1 lg:col-span-2 font-medium text-md lg:text-base text-gray-700 mb-2 lg:mb-0">
                    {createdBy}
                  </p>
                  <div className="col-span-2 mb-2 lg:mb-0">
                    <Button
                      value="Event Page"
                      padding="py-2 px-2"
                      width="w-3/4"
                      onClick={() => {
                        router.push({
                          pathname: `/events/${_id}`,
                        })
                      }}
                    />
                  </div>
                  <div className="col-span-2 mb-2 lg:mb-0">
                    <Button
                      value="View"
                      padding="py-2 px-2"
                      width="w-3/4"
                      onClick={() => {
                        setSelectedModule('Attendees')
                        setSelectedEventId(_id)
                      }}
                    />
                  </div>
                  <div className="col-span-1 lg:hidden inline-flex items-center space-x-2 w-full mb-2">
                    <button className="flex items-center justify-center w-full py-2 px-3 rounded-md bg-purple-light hover:bg-purple-dark text-white transition ease-in">
                      Edit
                    </button>
                    <button
                      className="flex items-center justify-center w-full py-2 px-3 rounded-md bg-purple-light hover:bg-purple-dark text-white transition ease-in"
                      onClick={deleteEvent.bind(this, _id)}
                    >
                      Remove
                    </button>
                  </div>

                  <button className="col-span-1 lg:col-span-1 hidden lg:flex items-center justify-center">
                    <AiTwotoneEdit
                      className="text-lg text-gray-700 hover:text-green-500 transition ease-in duration-200"
                      size={32}
                    />
                  </button>
                  <button
                    className="col-span-1 lg:col-span-1 hidden lg:flex items-center justify-center"
                    onClick={deleteEvent.bind(this, _id)}
                  >
                    <MdDelete
                      className="text-lg text-gray-700 hover:text-red-500 transition ease-in duration-200"
                      size={32}
                    />
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

        {showModal && (
          <div className="fixed z-10 top-0 bottom-0 right-0 left-0 w-full h-full bg-gray-900 bg-opacity-30">
            <form
              method="post"
              onSubmit={handleSubmit}
              className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-72 md:w-96 mx-auto md:mx-0 rounded-lg p-4"
            >
              <div className="inline-flex items-center justify-between w-full mb-4">
                <h2 className="font-semibold text-xl sm:text-2xl text-gray-800">
                  Add Events
                </h2>
                <button onClick={toggleModal}>
                  <IoMdClose className="text-xl text-gray-700" />
                </button>
              </div>
              <input
                onChange={handleChange}
                className="rounded-lg mb-2 placeholder-gray-400 w-full"
                placeholder="Event Name"
                type="text"
                name="eventName"
              />
              <input
                onChange={handleChange}
                className="rounded-lg mb-2 placeholder-gray-400 w-full"
                placeholder="Status"
                type="text"
                name="status"
              />
              <input
                onChange={handleChange}
                className="rounded-lg mb-4 placeholder-gray-400 w-full"
                placeholder="Created At"
                type="text"
                name="createdAt"
              />
              <Button value="Add Event" width="w-full" type="submit" />
            </form>
          </div>
        )}
      </section>
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

export default AdminEvents
