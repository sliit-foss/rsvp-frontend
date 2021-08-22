import {
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import Button from '../Button'
import { AiOutlineClose } from 'react-icons/ai'
import { MdAddAPhoto } from 'react-icons/md'

interface props {
  index: number
  disabled: boolean
  toggleModal: any
  setModalObjective: Dispatch<SetStateAction<string>>
  modalObjective: string
  speakers: any
  setSpeakers: Dispatch<SetStateAction<Array<any>>>
  setSelectedEditIndex: Dispatch<SetStateAction<number>>
}
const SpeakerFormFields = ({
  index,
  disabled,
  toggleModal,
  setModalObjective,
  modalObjective,
  setSpeakers,
  speakers,
  setSelectedEditIndex,
}: props): JSX.Element => {
  console.log(speakers)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    topic: '',
    occupation: '',
    photo: '',
    twitterURL: '',
    linkedInURL: '',
  })

  useEffect(() => {
    setFormData({
      name: modalObjective == 'Add' ? '' : speakers[index].name,
      description: modalObjective == 'Add' ? '' : speakers[index].description,
      topic: modalObjective == 'Add' ? '' : speakers[index].topic,
      occupation: modalObjective == 'Add' ? '' : speakers[index].occupation,
      photo: modalObjective == 'Add' ? '' : speakers[index].photo,
      twitterURL: modalObjective == 'Add' ? '' : speakers[index].twitterURL,
      linkedInURL: modalObjective == 'Add' ? '' : speakers[index].linkedInURL,
    })
  }, [speakers, index, modalObjective])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (disabled) {
      toggleModal()
      setModalObjective('Edit')
      setSelectedEditIndex(index)
    } else {
      console.log(formData)
      if (modalObjective == 'Edit') {
        const newSpeakers = speakers.slice()
        newSpeakers[index] = formData
        setSpeakers(newSpeakers)
      } else if (modalObjective == 'Add') {
        speakers.push(formData)
        setSpeakers(speakers)
      }
      toggleModal()
    }
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="inline-flex items-center justify-end w-full mt-6 px-6">
          <button
            onClick={
              disabled
                ? () => {
                    const newSpeakers = speakers.slice()
                    newSpeakers.splice(index, 1)
                    setSpeakers(newSpeakers)
                  }
                : toggleModal
            }
          >
            <div className="cursor-pointer transform hover:scale-105 transition ease-in duration-100 fill-current text-purple-dark hover:text-gray-800">
              <AiOutlineClose size={30} />
            </div>
          </button>
        </div>
        <form method="post" onSubmit={handleSubmit} className={`w-full p-8 `}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 mb-8">
            <div className="col-span-1 grid grid-rows-6 gap-5">
              <button className="row-span-5 md:row-span-5 rounded-md shadow-ds2 relative">
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="absolute left-0 w-full h-full col-span-1 row-span-5 opacity-0"
                  disabled={disabled}
                ></input>
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <MdAddAPhoto
                    className="fill-current-color text-gray-400"
                    size={100}
                  />
                  <div className="mt-4 text-lg text-gray-400 font-semibold">
                    Add User Photo
                  </div>
                </div>
              </button>
              <input
                className={`row-span-1 rounded-md shadow-ds2 border-0 mb-2 placeholder-gray-400 w-full ${
                  disabled ? 'bg-gray-200' : ''
                } `}
                placeholder="Speaker Name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={disabled}
                required
              />
            </div>

            <div className="col-span-1 grid grid-rows-6 gap-2 md:pl-8">
              <input
                className={`rounded-md shadow-ds2 border-0 mb-2 placeholder-gray-400 w-full ${
                  disabled ? 'bg-gray-200' : ''
                }`}
                placeholder="Speaker Occupation"
                type="text"
                id="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                disabled={disabled}
                required
              />
              <input
                className={`row-span-2 rounded-md shadow-ds2 border-0 mb-2 placeholder-gray-400 w-full ${
                  disabled ? 'bg-gray-200' : ''
                }`}
                placeholder="Speaker Description"
                type="text"
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                disabled={disabled}
                required
              />
              <input
                className={`row-span-2 shadow-ds2 border-0 rounded-md mb-2 placeholder-gray-400 w-full ${
                  disabled ? 'bg-gray-200' : ''
                }`}
                placeholder="Topic"
                type="text"
                id="topic"
                value={formData.topic}
                onChange={handleInputChange}
                disabled={disabled}
                required
              />
              <input
                className={`rounded-md shadow-ds2 border-0 mb-2 placeholder-gray-400 w-full ${
                  disabled ? 'bg-gray-200' : ''
                }`}
                placeholder="Twitter URL"
                type="text"
                id="twitterURL"
                value={formData.twitterURL}
                onChange={handleInputChange}
                disabled={disabled}
                required
              />
              <input
                className={`rounded-md shadow-ds2 border-0 mb-2 placeholder-gray-400 w-full ${
                  disabled ? 'bg-gray-200' : ''
                }`}
                placeholder="LinkedIn URL"
                type="text"
                id="linkedInURL"
                value={formData.linkedInURL}
                onChange={handleInputChange}
                disabled={disabled}
                required
              />
            </div>
          </div>

          <Button
            value={
              disabled
                ? 'Edit Speaker'
                : modalObjective == 'Edit'
                ? 'Update'
                : 'Add Speaker'
            }
            width="w-full"
            type="submit"
          />
          <div className="h-4"></div>
        </form>
      </div>
    </>
  )
}

export default SpeakerFormFields
