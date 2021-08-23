import {
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import Button from '../../Common/Button'
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
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (disabled) {
      toggleModal()
      setModalObjective('Edit')
      setSelectedEditIndex(index)
    } else {
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

  const encodeImage = (fileInput: any) => {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        const image = new Image()
        image.src = e.target.result
        image.onload = () => {
          const imgBase64Path = e.target.result
          setFormData({
            ...formData,
            [fileInput.target.name]: imgBase64Path.split(',')[1],
          })
        }
      }
      reader.readAsDataURL(fileInput.target.files[0])
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
              <button className="row-span-5 rounded-md shadow-ds2 relative">
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="absolute left-0 w-full h-full col-span-1 row-span-5 opacity-0 cursor-pointer"
                  onChange={encodeImage}
                  disabled={disabled}
                ></input>
                {formData.photo ? (
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img
                    className="object-cover"
                      src={
                        formData.photo.includes(
                          'https://firebasestorage.googleapis.com'
                        )
                          ? formData.photo
                          : `data:image/jpeg;base64,${formData.photo}`
                      }
                      alt="speakerImage"
                    ></img>
                  </div>
                ) : (
                  <div className="h-full w-full flex flex-col justify-center items-center">
                    <MdAddAPhoto
                      className="fill-current-color text-gray-400"
                      size={100}
                    />
                    <div className="mt-4 text-lg text-gray-400 font-semibold">
                      Add User Photo
                    </div>
                  </div>
                )}
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
