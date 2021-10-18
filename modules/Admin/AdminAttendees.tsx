import LoadingIndicator from '../../components/Admin/Layout/LoadingIndicator'
import { useGetAttendees } from '../../queries/useGetAttendee'

interface props {
  selectedEventId: string
}

const AdminAttendees = ({ selectedEventId }: props): JSX.Element => {
  const { data: attendees, isSuccess } = useGetAttendees(selectedEventId)

  return (
    <>
      <section className=" sm:p-5 md:h-full min-h-84vh">
        {isSuccess ? (
          <div className="h-full">
            <div
              className="w-auto px-6 mt-4 mb-8 py-2 md:py-3 mx-3 md:mx-0 rounded-lg shadow-md bg-purple-dark cursor-default "
              data-aos="fade-right"
            >
              <div className="text-2xl text-white font-semibold text-left ">
                Attendees
              </div>
            </div>
            <div
              className="hidden md:grid md:grid-rows-1 md:grid-cols-10 md:gap-4 bg-gradient-to-l from-purple-light to-purple-dark font-medium text-lg text-white p-4 md:px-8 rounded-t-xl shadow-lg mb-3"
              data-aos="fade-right"
            >
              <h3 className="md:col-span-2">Name</h3>
              <h3 className="md:col-span-3">Email</h3>
              <h3 className="md:col-span-3">Organization</h3>
              <div className="md:col-span-1" />
            </div>
            {/* data goes here */}
            {attendees?.length != 0 ? (
              <>
                <div className="m-4 flex flex-col space-y-2 md:max-h-65vh pb-4 md:overflow-y-scroll scrollbar-hide">
                  {attendees?.map(({ name, email, organization }, i) => (
                    <div
                      key={i}
                      className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 md:grid-cols-10 gap-2 sm:gap-4 rounded-sm shadow-lg p-4 md:px-8 justify-center items-center"
                      data-aos={i % 2 == 1 ? 'fade-right' : 'fade-left'}
                    >
                      <p className="sm:col-span-3 md:col-span-2 font-semibold text-xl md:text-base text-gray-700">
                        {name}
                      </p>
                      <p
                        className="sm:col-span-3 md:col-span-3 font-medium text-gray-700 w-full"
                        style={{ wordWrap: 'break-word' }}
                      >
                        {email}
                      </p>
                      <p className="sm:col-span-3 md:col-span-3 font-medium text-gray-700">
                        {organization}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div
                className="w-full h-84vh lg:h-auto flex flex-col justify-center items-center lg:mt-20%"
                data-aos="fade-left"
              >
                <div className="font-inter font-bold text-5xl md:text-6xl lg:text-7xl text-center text-lightBlue mb-5 px-5 animate-pulse">
                  STAY TUNED
                </div>
                <div className="font-inter font-semibold text-xl lg:text-2xl text-center mb-0 lg:mb-20 px-8 text-gray-800">
                  This event has no attendees yet
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="h-84vh-32">
            <LoadingIndicator />
          </div>
        )}
      </section>
    </>
  )
}

export default AdminAttendees
