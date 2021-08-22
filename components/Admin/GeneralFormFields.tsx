import { MdAddAPhoto } from 'react-icons/md'

const GeneralFormFields = (): JSX.Element => {
  //   const intialFormValues = Object.freeze({
  //     eventNmae: '',
  //     eventVenue: '',
  //     startTime: '',
  //     endTime: '',
  //     eventDescription: '',
  //     photo: '',
  //     category: '',
  //     host: '',
  //     status: '',
  //   })
  return (
    <form className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3 px-2">
      <div className="col-span-1 md:col-span-2 grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3">
        <input
          className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
          placeholder="Event Name"
          name="eventName"
          type="text"
          required
        />
        <input
          className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
          placeholder="Event Venue"
          name="eventVenue"
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
            name="endTime"
            id="endTime"
            type="datetime-local"
            required
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-3">
        <textarea
          className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
          placeholder="Event Description"
          name="eventDescription"
          cols={30}
          rows={10}
        ></textarea>
        <button className="col-span-1 rounded-md shadow-ds2 relative">
          <input
            type="file"
            id="photo"
            name="eventPhoto"
            className="absolute left-0 w-full h-full col-span-1 row-span-5 opacity-0"
          ></input>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <MdAddAPhoto
              className="fill-current-color text-gray-400"
              size={100}
            />
            <div className="mt-4 text-lg text-gray-400 font-semibold">
              Add Event Cover
            </div>
          </div>
        </button>
      </div>
      <input
        className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        placeholder="Category"
        name="category"
        type="text"
        required
      />
      <input
        className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        placeholder="Host"
        name="host"
        type="text"
        required
      />
      <select
        className="col-span-1 rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full"
        name="status"
      ></select>
    </form>
  )
}

export default GeneralFormFields
