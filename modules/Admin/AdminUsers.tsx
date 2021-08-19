import Button from '../../components/Button'
import { MdDelete } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { ChangeEvent, FormEvent, useState } from 'react'

interface IUser {
  username: string
  email: string
  faculty: string
}

const AdminUsers = (): JSX.Element => {
  const sampleData: IUser[] = [
    { username: 'Akalanka', email: 'akalanka@gmail.com', faculty: 'FOSS' },
    { username: 'Layan', email: 'Layan@gmail.com', faculty: 'FOSS' },
    { username: 'Kaveesha', email: 'Kaveesha@gmail.com', faculty: 'FCSC' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
    { username: 'Madusha', email: 'Madusha@gmail.com', faculty: 'FOSS' },
  ]

  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    faculty: '',
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
        <h2 className="font-semibold text-xl sm:text-2xl">Users</h2>
        <Button value="Add Users" onClick={toggleModal} />
      </div>
      <div className="hidden md:grid md:grid-rows-1 md:grid-cols-7 md:gap-4 bg-purple-light font-medium text-lg text-white p-4 rounded-t-xl shadow-lg mb-3">
        <h3 className="md:col-span-2">Username</h3>
        <h3 className="md:col-span-3">Email</h3>
        <h3 className="md:col-span-1">Faculty</h3>
        <div className="md:col-span-1" />
      </div>
      {/* data goes here */}
      <div className="flex flex-col space-y-2 md:max-h-65vh md:overflow-y-scroll scrollbar-hide">
        {sampleData.length ? (
          sampleData.map(({ username, email, faculty }) => (
            <div
              key={email}
              className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 rounded-xl shadow-lg p-4"
            >
              <p className="sm:col-span-3 md:col-span-2 font-medium text-xl md:text-base text-gray-700">
                {username}
              </p>
              <p className="sm:col-span-3 md:col-span-3 font-medium text-gray-700">
                {email}
              </p>
              <p className="sm:col-span-3 md:col-span-1 font-medium text-sm md:text-base text-gray-700">
                {faculty}
              </p>

              <button className="sm:col-span-1 md:col-span-1 md:flex hidden items-center justify-center">
                <MdDelete className="text-lg hidden md:block text-gray-700" />
              </button>
              <button className="sm:col-span-1 md:col-span-1 border-2 border-gray-600 rounded-xl py-1 focus:bg-gray-600 focus:text-white transition ease-in flex md:hidden items-center justify-center">
                Remove
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
            onSubmit={handleSubmit}
            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-72 md:w-96 mx-auto md:mx-0 rounded-lg p-4"
          >
            <div className="inline-flex items-center justify-between w-full mb-4">
              <h2 className="font-semibold text-xl sm:text-2xl text-gray-800">
                Add Users
              </h2>
              <button onClick={toggleModal}>
                <IoMdClose className="text-xl text-gray-700" />
              </button>
            </div>
            <input
              onChange={handleChange}
              className="rounded-lg mb-2 placeholder-gray-400 w-full"
              placeholder="username"
              type="text"
              name="username"
            />
            <input
              onChange={handleChange}
              className="rounded-lg mb-2 placeholder-gray-400 w-full"
              placeholder="email"
              type="email"
              name="email"
            />
            <input
              onChange={handleChange}
              className="rounded-lg mb-4 placeholder-gray-400 w-full"
              placeholder="faculty"
              type="text"
              name="faculty"
            />
            <Button value="Add User" width="w-full" type="submit" />
          </form>
        </div>
      )}
    </section>
  )
}

export default AdminUsers
