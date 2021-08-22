import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LoadingOverlay from '../../components/LoadingOverlay'
import FailedSnackbar from '../../components/Common/Snackbars/FailedSnackbar'
import SuccessSnackbar from '../../components/Common/Snackbars/SuccessSnackbar'
import SpeakerFormFields from '../../components/Admin/SpeakerFormFields'
import GeneralFormFields from '../../components/Admin/GeneralFormFields'

const AdminAddEvent = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  const [speakers, setSpeakers] = useState<Array<any>>([])
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1)
  const [modalObjective, setModalObjective] = useState('Edit')
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    console.log('change tracked')
    setSpeakers(speakers)
  }, [speakers])

  const toggleModal = () => {
    setShowModal((prev) => !prev)
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
        <form
          className="flex flex-col space-y-2 md:max-h-84vh-50 pb-4 md:overflow-y-scroll scrollbar-hide"
          id="container"
        >
          <div
            className="w-full bg-gradient-to-l from-purple-light to-purple-dark font-medium text-xl text-white p-4 px-8 rounded-t-xl shadow-lg mb-3"
            data-aos="fade-right"
          >
            General Details
          </div>
          <GeneralFormFields />
          <div
            className="w-full bg-gradient-to-l from-purple-light to-purple-dark font-medium text-xl text-white p-4 px-8 rounded-t-xl shadow-lg mb-3"
            data-aos="fade-right"
          >
            Speakers
          </div>
          {speakers.map((speaker, index) => {
            console.log('Printing')
            console.log(speakers[index])
            return (
              <div
                key={index}
                data-aos={index % 2 == 1 ? 'fade-right' : 'fade-left'}
                data-aos-anchor="#container"
              >
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
          <div
            className="flex justify-center md:justify-end items-start pt-5 my-5"
            data-aos="fade-left"
            data-aos-anchor="#container"
          >
            <button
              className="w-full md:w-5/12 xl:w-1/4 py-2 mx-8 mb-2 rounded-md bg-gradientBlue hover:bg-gradientPurple text-white transition ease-in flex items-center justify-center"
              onClick={() => {
                setModalObjective('Add')
                toggleModal()
              }}
            >
              Add New Speaker
            </button>
          </div>
          <div
            className="flex justify-center md:justify-end items-start my-5"
            data-aos="fade-right"
            data-aos-anchor="#container"
          >
            <button
              className="w-full md:w-5/12 xl:w-1/4 py-2 mx-8 rounded-md bg-gradientBlue hover:bg-gradientPurple text-white transition ease-in flex items-center justify-center"
              onClick={() => {
                console.log('Haylow')
              }}
            >
              Finish Adding Event
            </button>
          </div>
        </form>
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
      <div
        className={
          openFailedSnackbar
            ? 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-40 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <FailedSnackbar message={errorMessage} />
      </div>
      <div
        className={
          openSuccessSnackbar
            ? 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-40 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 w-full left-0 md:left-12.5% flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <SuccessSnackbar message={successMessage} />
      </div>
    </>
  )
}

export default AdminAddEvent
