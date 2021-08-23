import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LoadingOverlay from '../../../components/Common/LoadingOverlay'
import FailedSnackbar from '../../../components/Common/Snackbars/FailedSnackbar'
import SuccessSnackbar from '../../../components/Common/Snackbars/SuccessSnackbar'
import SpeakerFormFields from '../../../components/Admin/Events/SpeakerFormFields'
import GeneralFormFields from '../../../components/Admin/Events/GeneralFormFields'
import { EventEndpoints } from '../../../pages/api/event'
import { useGetEvent } from '../../../queries/useGetEvent'

interface EventDataInterface {
  name?: string
  description?: string
  headerImage?: string
  status?: string
  category?: string
  venue?: string
  host?: string
  startTime?: number
  endTime?: number
  capacity?: number
  speakers?: Array<any>
}

interface props {
  setSelectedModule: any
  selectedEventId: string
}

const AdminManageEvent = ({
  setSelectedModule,
  selectedEventId,
}: props): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  const { data: event } = useGetEvent(selectedEventId)
  const [speakers, setSpeakers] = useState<Array<any>>([])
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1)
  const [modalObjective, setModalObjective] = useState('Edit')
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [generalFormData, setGeneralFormData] = useState({
    name: '',
    description: '',
    headerImage: '',
    status: '',
    category: '',
    venue: '',
    host: '',
    startTime: 0,
    endTime: 0,
    capacity: 0,
  })

  useEffect(() => {
    setGeneralFormData({
      name: event?.name || '',
      description: event?.description || '',
      headerImage: event?.headerImage || '',
      status: event?.status || '',
      category: event?.category || '',
      venue: event?.venue || '',
      host: event?.host || '',
      startTime: event?.startTime || 0,
      endTime: event?.endTime || 0,
      capacity: event?.capacity || 0,
    })
    setSpeakers(event?.speakers || [])
  }, [event])

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setShowLoading(true)

    const eventData: EventDataInterface = {
      ...generalFormData,
      speakers: speakers ? speakers : undefined,
    }
    if (selectedEventId == null) {
      EventEndpoints.createEvent(eventData)
        .then(() => {
          setSuccessMessage('Event added successfully')
          setOpenSuccessSnackbar(true)
          setShowLoading(false)
          setGeneralFormData({
            name: '',
            description: '',
            headerImage: '',
            status: '',
            category: '',
            venue: '',
            host: '',
            startTime: 0,
            endTime: 0,
            capacity: 0,
          })
          setSpeakers([])
          setTimeout(function () {
            setOpenSuccessSnackbar(false)
          }, 1500)
          setTimeout(function () {
            setSelectedModule('Events')
          }, 1800)
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
    } else {
      const eventDataCopy = { ...eventData }
      if (event?.name == eventDataCopy.name) {
        delete eventDataCopy.name
      }
      if (event?.headerImage == eventDataCopy.headerImage) {
        delete eventDataCopy.headerImage
      }
      if (event?.description == eventDataCopy.description) {
        delete eventDataCopy.description
      }
      if (event?.status == eventDataCopy.status) {
        delete eventDataCopy.status
      }
      if (event?.startTime == eventDataCopy.startTime) {
        delete eventDataCopy.startTime
      }
      if (event?.endTime == eventDataCopy.endTime) {
        delete eventDataCopy.endTime
      }
      if (event?.host == eventDataCopy.host) {
        delete eventDataCopy.host
      }
      if (event?.capacity == eventDataCopy.capacity) {
        delete eventDataCopy.capacity
      }
      if (event?.category == eventDataCopy.category) {
        delete eventDataCopy.category
      }
      if (event?.venue == eventDataCopy.venue) {
        delete eventDataCopy.venue
      }
      EventEndpoints.updateEvent(selectedEventId, eventDataCopy)
        .then(() => {
          setSuccessMessage('Event updated successfully')
          setOpenSuccessSnackbar(true)
          setShowLoading(false)
          setGeneralFormData({
            name: '',
            description: '',
            headerImage: '',
            status: '',
            category: '',
            venue: '',
            host: '',
            startTime: 0,
            endTime: 0,
            capacity: 0,
          })
          setSpeakers([])
          setTimeout(function () {
            setOpenSuccessSnackbar(false)
          }, 1500)
          setTimeout(function () {
            setSelectedModule('Events')
          }, 1800)
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
        <div
          className="flex flex-col space-y-2 md:max-h-84vh-50 pb-4 md:overflow-y-scroll scrollbar-hide"
          id="mainForm"
        >
          <div
            className="w-full bg-gradient-to-l from-purple-light to-purple-dark font-medium text-xl text-white p-4 px-8 rounded-t-xl shadow-lg mb-3"
            data-aos="fade-right"
          >
            General Details
          </div>
          <GeneralFormFields
            generalFormData={generalFormData}
            setGeneralFormData={setGeneralFormData}
            handleSubmit={handleSubmit}
          />
          <div className="h-2"></div>
          <div
            className="w-full bg-gradient-to-l from-purple-light to-purple-dark font-medium text-xl text-white p-4 px-8 rounded-t-xl shadow-lg mb-3"
            data-aos="fade-right"
          >
            Speakers
          </div>
          {speakers.map((speaker, index) => {
            return (
              <div
                key={index}
                data-aos={index % 2 == 1 ? 'fade-right' : 'fade-left'}
                data-aos-anchor="#mainForm"
              >
                <SpeakerFormFields
                  index={index}
                  disabled={true}
                  toggleModal={toggleModal}
                  setModalObjective={setModalObjective}
                  modalObjective="Edit"
                  setSpeakers={setSpeakers}
                  speakers={speakers}
                  setSelectedEditIndex={setSelectedEditIndex}
                />
              </div>
            )
          })}
          <div
            className="flex justify-center md:justify-end items-start pt-5 my-5"
            data-aos="fade-left"
            data-aos-anchor="#container"
          >
            <button
              type="button"
              className="w-full md:w-5/12 xl:w-1/4 py-2 mx-8 mb-2 rounded-md bg-gradientBlue hover:bg-gradientPurple text-white transition ease-in flex items-center justify-center"
              onClick={() => {
                setModalObjective('Add')
                toggleModal()
              }}
            >
              Add New Speaker
            </button>
          </div>
          <div
            className="flex justify-center md:justify-end items-start my-5"
            data-aos="fade-right"
            data-aos-anchor="#container"
          >
            <button
              type="submit"
              className="w-full md:w-5/12 xl:w-1/4 py-2 mx-8 rounded-md bg-gradientBlue hover:bg-gradientPurple text-white transition ease-in flex items-center justify-center"
              form="generalForm"
            >
              {selectedEventId != null ? 'Update Event' : 'Finish Adding Event'}
            </button>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed z-50 top-1/2 left-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-10/12 md:w-3/4 mx-auto md:mx-0 rounded-lg pointer-events-auto overflow-auto max-h-95vh scrollbar-hide">
          <SpeakerFormFields
            key={-1}
            index={selectedEditIndex}
            disabled={false}
            toggleModal={toggleModal}
            setModalObjective={setModalObjective}
            modalObjective={modalObjective}
            setSpeakers={setSpeakers}
            speakers={speakers}
            setSelectedEditIndex={setSelectedEditIndex}
          />
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

export default AdminManageEvent
