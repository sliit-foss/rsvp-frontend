import Button from '../../components/Button'
import { MdDelete } from 'react-icons/md'

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
  return (
    <section className="p-4 sm:p-5 md:h-full">
      <div className="inline-flex items-center justify-between w-full mb-4">
        <h2 className="font-semibold text-xl sm:text-2xl">Users</h2>
        <Button value="Add Users" />
      </div>
      <div className="hidden md:grid md:grid-rows-1 md:grid-cols-7 md:gap-4 bg-gradient-to-l from-purple-light to-purple-dark font-medium text-lg text-white p-4 rounded-t-xl shadow-lg mb-3">
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
              className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-4 rounded-xl shadow-lg p-4"
            >
              <p className="sm:col-span-3 md:col-span-2 font-medium text-gray-700">
                {username}
              </p>
              <p className="sm:col-span-3 md:col-span-3 font-medium text-gray-700">
                {email}
              </p>
              <p className="sm:col-span-3 md:col-span-1 font-medium text-gray-700">
                {faculty}
              </p>

              <button className="sm:col-span-1 md:col-span-1 flex items-center justify-center">
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
    </section>
  )
}

export default AdminUsers
