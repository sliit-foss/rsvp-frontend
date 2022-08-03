import { useState, useEffect } from 'react'
import LoadingOverlay from '../../../components/Common/LoadingOverlay'
import SpeakerFormFields from '../../../components/Admin/Events/SpeakerFormFields'
import GeneralFormFields from '../../../components/Admin/Events/GeneralFormFields'
import { EventEndpoints } from '../../../pages/api/event'
import { useGetEvent } from '../../../queries/useGetEvent'
import { useGetUser } from '../../../queries/useGetUser'
import { useGetAttendees } from '../../../queries/useGetAttendee'
import Swal from 'sweetalert2'

interface EventDataInterface {
  name?: string
  description?: string
  headerImage?: string
  status?: string
  category?: string
  venue?: string
  host?: string
  joinLink?: string
  startTime?: number
  endTime?: number
  capacity?: number
  speakers?: Array<any>
  tags?: Array<string>
  faculty?: Array<string>
}

interface props {
  setSelectedModule: any
  selectedEventId: string
}

const AdminManageEvent = ({
  setSelectedModule,
  selectedEventId,
}: props): JSX.Element => {
  const { data: event } = useGetEvent(selectedEventId)
  const { data: attendees } = useGetAttendees(selectedEventId)
  const { data: userData, isSuccess } = useGetUser()
  const [speakers, setSpeakers] = useState<Array<any>>([])
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1)
  const [modalObjective, setModalObjective] = useState('Edit')
  const [showLoading, setShowLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [generalFormData, setGeneralFormData] = useState({
    name: '',
    description: '',
    headerImage: '',
    status: '',
    category: '',
    venue: '',
    host: '',
    joinLink: '',
    startTime: Date.now(),
    endTime: Date.now(),
    capacity: 0,
    tags: [] as Array<string>,
    faculty: [] as Array<string>,
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
      joinLink: event?.joinLink || '',
      startTime: event?.startTime || Date.now(),
      endTime: event?.endTime || Date.now(),
      capacity: event?.capacity || 0,
      tags: event?.tags || [],
      faculty: event?.faculty || [],
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (eventData.endTime! < eventData.startTime!) {
      setShowLoading(false)
      Swal.fire({
        icon: 'warning',
        title: `<div class="text-2xl">Event end time cannot be less than the start time</div>`,
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }

    if (eventData.faculty?.length == 0) {
      setShowLoading(false)
      Swal.fire({
        icon: 'warning',
        title: `<div class="text-2xl">Faculty is required</div>`,
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }

    if (
      !eventData.faculty?.includes(userData ? userData.faculty : '') &&
      userData?.role != 'Admin'
    ) {
      setShowLoading(false)
      Swal.fire({
        icon: 'warning',
        title: `<div class="text-2xl">Publisher's faculty is mandatory</div>`,
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }
    if (selectedEventId == null) {
      EventEndpoints.createEvent(eventData)
        .then(() => {
          setShowLoading(false)
          clearData()
          let timerInterval: any
          Swal.fire({
            icon: 'success',
            title: '<div class="text-2xl">Event added successfully</div>',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              clearInterval(timerInterval)
            },
          }).then(() => {
            setSelectedModule('Events')
          })
        })
        .catch((e) => {
          setShowLoading(false)
          Swal.fire({
            icon: 'error',
            title: `<div class="text-2xl">${e.response.data.message}</div>`,
            showConfirmButton: false,
            timer: 1500,
          })
        })
    } else {
      const requestBody = getCleanedRequestBody(eventData)
      EventEndpoints.updateEvent(selectedEventId, requestBody)
        .then(() => {
          setShowLoading(false)
          clearData()
          let timerInterval: any
          Swal.fire({
            icon: 'success',
            title: '<div class="text-2xl">Event updated successfully</div>',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              clearInterval(timerInterval)
            },
          }).then(() => {
            setSelectedModule('Events')
          })
        })
        .catch((e) => {
          setShowLoading(false)
          Swal.fire({
            icon: 'error',
            title: `<div class="text-2xl">${e.response.data.message}</div>`,
            showConfirmButton: false,
            timer: 1500,
          })
        })
    }
  }

  const clearData = () => {
    setGeneralFormData({
      name: '',
      description: '',
      headerImage: '',
      status: '',
      category: '',
      venue: '',
      host: '',
      joinLink: '',
      startTime: Date.now(),
      endTime: Date.now(),
      capacity: 0,
      tags: [],
      faculty: [],
    })
    setSpeakers([])
  }

  const getCleanedRequestBody = (eventData: EventDataInterface) => {
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
    if (event?.joinLink == eventDataCopy.joinLink) {
      delete eventDataCopy.joinLink
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
    if (JSON.stringify(event?.tags) == JSON.stringify(eventDataCopy.tags)) {
      delete eventDataCopy.tags
    }
    if (
      JSON.stringify(event?.faculty) == JSON.stringify(eventDataCopy.faculty)
    ) {
      delete eventDataCopy.faculty
    }
    return eventDataCopy
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
          <div className="w-full bg-gradient-to-l from-purple-light to-purple-dark font-medium text-xl text-white p-4 px-8 rounded-t-xl shadow-lg mb-3">
            General Details
          </div>
          <GeneralFormFields
            generalFormData={generalFormData}
            setGeneralFormData={setGeneralFormData}
            handleSubmit={handleSubmit}
            userRole={userData?.role}
            attendeesCount={attendees?.length}
          />
          <div className="h-2"></div>
          <div className="w-full bg-gradient-to-l from-purple-light to-purple-dark font-medium text-xl text-white p-4 px-8 rounded-t-xl shadow-lg mb-3">
            Speakers
          </div>
          {speakers.map((speaker, index) => {
            return (
              <div key={index}>
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
          <div className="flex justify-center md:justify-end items-start pt-5 my-5">
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
          <div className="flex justify-center md:justify-end items-start my-5">
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
    </>
  )
}

export default AdminManageEvent
