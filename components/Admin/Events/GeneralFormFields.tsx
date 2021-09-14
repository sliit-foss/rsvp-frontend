import { Dispatch, SetStateAction } from 'react'
import { MdAddAPhoto } from 'react-icons/md'

interface props {
  generalFormData: any
  setGeneralFormData: Dispatch<SetStateAction<any>>
  handleSubmit: any
}

const GeneralFormFields = ({
  generalFormData,
  setGeneralFormData,
  handleSubmit,
}: props): JSX.Element => {
  const handleInputChange = (e: any) => {
    setGeneralFormData({
      ...generalFormData,
      [e.target.name]:
        e.target.name == 'startTime' || e.target.name == 'endTime'
          ? Date.parse(e.target.value)
          : e.target.name == 'capacity'
          ? Number(e.target.value)
          : e.target.value,
    })
  }

  const handleSelectChange =
    () => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setGeneralFormData({
        ...generalFormData,
        [e.target.name]: e.target.value,
      })
    }

  const encodeImage = (fileInput: any) => {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        const image = new Image()
        image.src = e.target.result
        image.onload = () => {
          const imgBase64Path = e.target.result
          setGeneralFormData({
            ...generalFormData,
            [fileInput.target.name]: imgBase64Path.split(',')[1],
          })
        }
      }
      reader.readAsDataURL(fileInput.target.files[0])
    }
  }

  return (
    <form
      className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3 px-2"
      id="generalForm"
      onSubmit={handleSubmit}
      data-aos="fade-left"
    >
      <div className="col-span-1 md:col-span-2 grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3">
        <input
          className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
          placeholder="Event Name"
          value={generalFormData.name}
          onChange={handleInputChange}
          name="name"
          type="text"
          required
        />
        <input
          className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
          placeholder="Event Venue"
          value={generalFormData.venue}
          onChange={handleInputChange}
          name="venue"
          type="text"
          required
        />
      </div>
      <div className="col-span-1 md:col-span-2 grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3">
        <div className="col-span-1">
          <label className="text-sm text-gray-400" htmlFor="startTime">
            Start Time
          </label>
          <input
            className="rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
            placeholder="Start Time"
            value={new Date(
              generalFormData.startTime == 0
                ? Date.now()
                : new Date(generalFormData.startTime).getTime() +
                  new Date().getTimezoneOffset() * -60 * 1000
            )
              .toISOString()
              .slice(0, 19)}
            onChange={handleInputChange}
            name="startTime"
            id="startTime"
            type="datetime-local"
            required
          />
        </div>
        <div className="col-span-1">
          <label className="text-sm text-gray-400" htmlFor="endTime">
            End Time
          </label>
          <input
            className="rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
            placeholder="End Time"
            value={new Date(
              generalFormData.endTime == 0
                ? Date.now()
                : new Date(generalFormData.endTime).getTime() +
                  new Date().getTimezoneOffset() * -60 * 1000
            )
              .toISOString()
              .slice(0, 19)}
            onChange={handleInputChange}
            name="endTime"
            id="endTime"
            type="datetime-local"
            required
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3">
        <textarea
          className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
          placeholder="Event Description"
          value={generalFormData.description}
          onChange={handleInputChange}
          name="description"
          cols={30}
          rows={10}
        ></textarea>
        <button className="col-span-1 rounded-md shadow-ds2 relative">
          <input
            type="file"
            id="photo"
            name="headerImage"
            className="absolute left-0 w-full h-full col-span-1 row-span-5 opacity-0 cursor-pointer"
            onChange={encodeImage}
          ></input>
          {generalFormData.headerImage ? (
            <div className="h-full w-full flex flex-col justify-center items-center">
              <img
                src={
                  generalFormData.headerImage.includes(
                    'https://firebasestorage.googleapis.com'
                  )
                    ? generalFormData.headerImage
                    : `data:image/jpeg;base64,${generalFormData.headerImage}`
                }
                alt="headerImage"
              ></img>
            </div>
          ) : (
            <div className="h-full w-full flex flex-col justify-center items-center">
              <MdAddAPhoto
                className="fill-current-color text-gray-400"
                size={100}
              />
              <div className="mt-4 text-lg text-gray-400 font-semibold">
                Add Event Cover
              </div>
            </div>
          )}
        </button>
      </div>
      <input
        className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        placeholder="Category"
        value={generalFormData.category}
        onChange={handleInputChange}
        name="category"
        type="text"
        required
      />
      <input
        className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        placeholder="Host"
        value={generalFormData.host}
        onChange={handleInputChange}
        name="host"
        type="text"
        required
      />
      <input
        className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        placeholder="Event Capacity"
        value={generalFormData.capacity}
        onChange={handleInputChange}
        name="capacity"
        type="number"
        required
      />
      <select
        className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        name="status"
        value={generalFormData.status}
        onChange={handleSelectChange()}
      >
        <option value="" disabled selected>
          Event Status
        </option>
        <option value="Happening Now">Happening Now</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Closed">Closed</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Postponed">Postponed</option>
      </select>
      <input
        className="col-span-2 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        placeholder="Event Join Link"
        value={generalFormData.joinLink}
        onChange={handleInputChange}
        name="joinLink"
        type="text"
      />
    </form>
  )
}

export default GeneralFormFields
