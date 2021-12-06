import { useState } from 'react'
import { useRouter } from 'next/router'
import { MdDelete } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'
import Button from '../../../components/Common/Button'
import LoadingOverlay from '../../../components/Common/LoadingOverlay'
import LoadingIndicator from '../../../components/Admin/Layout/LoadingIndicator'
import { useGetEvents } from '../../../queries/useGetEvent'
import { EventEndpoints } from '../../../pages/api/event'
import Swal from 'sweetalert2'

interface props {
  setSelectedModule: any
  setSelectedEventId: any
}

const AdminEvents = ({
  setSelectedModule,
  setSelectedEventId,
}: props): JSX.Element => {
  const router = useRouter()
  const { data: eventList = [], isSuccess } = useGetEvents()
  const [showLoading, setShowLoading] = useState(false)
  let loggedInUserClub: string
  let loggedInUserRole: string
  if (process.browser) {
    loggedInUserClub = window.localStorage.getItem('Club') || ''
    loggedInUserRole = window.localStorage.getItem('Role') || ''
  }
  const deleteEvent = (eventId: string) => {
    setShowLoading(true)
    EventEndpoints.deleteEvent(eventId)
      .then(() => {
        setShowLoading(false)
        let timerInterval: any
        Swal.fire({
          icon: 'success',
          title: '<div class="text-2xl">Event deleted successfully</div>',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          if (process.browser) {
            window.location.reload()
          }
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
              <Button
                value="Add Event"
                onClick={() => {
                  setSelectedEventId(null)
                  setSelectedModule('Add/EditEvent')
                }}
              />
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
            {eventList.length != 0 ? (
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
                      className={`col-span-1 lg:col-span-2 w-full 2xl:w-10/12 px-4 py-1 font-semibold rounded lg:rounded-3xl shadow-md text-white text-base text-center filter hover:brightness-110 transition ease-in duration-150 cursor-default ${
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
                        color={ loggedInUserRole !== 'Admin' && loggedInUserClub !== createdBy ? 'bg-gray-500 cursor-default pointer-events-none' : undefined }
                        onClick={() => {
                          setSelectedModule('Attendees')
                          setSelectedEventId(_id)               
                        }}
                      />
                    </div>
                    <div className="col-span-2 lg:hidden grid grid-rows-1 grid-cols-2 gap-2 w-full mb-2">
                      <button
                        className="col-span-1 flex items-center justify-center w-full py-2 px-3 rounded-md bg-purple-light hover:bg-purple-dark text-white transition ease-in"
                        onClick={() => {
                          setSelectedModule('Add/EditEvent')
                          setSelectedEventId(_id)
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="col-span-1 flex items-center justify-center w-full py-2 px-3 rounded-md bg-purple-light hover:bg-purple-dark text-white transition ease-in"
                        onClick={deleteEvent.bind(this, _id)}
                      >
                        Remove
                      </button>
                    </div>

                    <button
                      className="col-span-1 lg:col-span-1 hidden lg:flex items-center justify-center"
                      onClick={() => {
                        setSelectedModule('Add/EditEvent')
                        setSelectedEventId(_id)
                      }}
                    >
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
            ) : (
              <div
                className="font-inter font-semibold text-xl lg:text-2xl text-center mt-25vh lg:mt-30vh mb-20 px-8 text-gray-800"
                data-aos="fade-left"
              >
                There are no events at the moment.
              </div>
            )}
          </>
        ) : (
          <div className="h-84vh-32">
            <LoadingIndicator />
          </div>
        )}
      </section>
    </>
  )
}

export default AdminEvents
