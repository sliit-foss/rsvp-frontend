import Button from '../../components/Button'
import { MdDelete } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { AiTwotoneEdit } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react'

interface IEvent {
  eventName: string
  status: string
  createdBy: string
}

const AdminEvents = (): JSX.Element => {
  const sampleData: IEvent[] = [
    { eventName: 'Aurudu festival', status: 'Upcoming', createdBy: 'FOSS' },
    { eventName: 'Aurudu festival', status: 'Upcoming', createdBy: 'FOSS' },
    { eventName: 'Aurudu festival', status: 'Upcoming', createdBy: 'FOSS' },
    { eventName: 'Aurudu festival', status: 'Upcoming', createdBy: 'FOSS' },
    { eventName: 'Aurudu festival', status: 'Upcoming', createdBy: 'FOSS' },
    { eventName: 'Aurudu festival', status: 'Upcoming', createdBy: 'FOSS' },
  ]

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

  return (
    <section className="p-4 sm:p-5 md:h-full">
      <div className="inline-flex items-center justify-between w-full mb-4">
        <h2 className="font-semibold text-xl sm:text-2xl">Events</h2>
        <Button value="Add Events" onClick={toggleModal} />
      </div>
      <div className="hidden lg:grid lg:grid-rows-1 lg:grid-cols-10 lg:gap-4 bg-gradient-to-l from-purple-light to-purple-dark font-medium text-lg text-white p-4 rounded-t-xl shadow-lg mb-3">
        <h3 className="lg:col-span-2">Event Name</h3>
        <h3 className="lg:col-span-2">Status</h3>
        <h3 className="lg:col-span-2">Created By</h3>
        <h3 className="lg:col-span-2">Details</h3>
        <div className="lg:col-span-1" />
        <div className="lg:col-span-1" />
      </div>
      {/* data goes here */}
      <div className="flex flex-col space-y-2 md:max-h-65vh md:overflow-y-scroll scrollbar-hide">
        {sampleData.length ? (
          sampleData.map(({ eventName, createdBy, status }, i) => (
            <div
              key={i}
              className="grid grid-rows-1 grid-cols-1 lg:grid-cols-10 gap-2 sm:gap-4 rounded-xl shadow-lg p-4"
            >
              <p className="col-span-1 lg:col-span-2 font-medium text-xl lg:text-base text-gray-700">
                {eventName}
              </p>
              <p className="col-span-1 lg:col-span-2 font-medium text-gray-700">
                {status}
              </p>
              <p className="col-span-1 lg:col-span-2 font-medium text-sm lg:text-base text-gray-700">
                {createdBy}
              </p>
              <div className="col-span-2 mb-2 lg:mb-0">
                <Button value="View" padding="py-1 px-2" width="w-full" />
              </div>

              <div className="col-span-1 lg:hidden inline-flex items-center space-x-2 w-full">
                <button className="flex items-center justify-center border-2 border-gray-500 rounded-lg py-1 px-4 w-full text-lg text-gray-700 focus:bg-gray-700 focus:text-white transition ease-in">
                  <AiTwotoneEdit />
                </button>
                <button className="flex items-center justify-center border-2 border-gray-500 rounded-lg py-1 px-4 w-full text-lg text-gray-700 focus:bg-gray-700 focus:text-white transition ease-in">
                  <MdDelete />
                </button>
              </div>

              <button className="col-span-1 lg:col-span-1 hidden lg:flex items-center justify-center">
                <AiTwotoneEdit className="text-lg text-gray-700" />
              </button>
              <button className="col-span-1 lg:col-span-1 hidden lg:flex items-center justify-center">
                <MdDelete className="text-lg text-gray-700" />
              </button>
            </div>
          ))
        ) : (
          <div className="rounded-xl shadow-lg px-4 py-10">
            <p className="font-semibold text-2xl text-center">
              No Records Found
            </p>
          </div>
        )}
      </div>
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
  )
}

export default AdminEvents
