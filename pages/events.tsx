import { useState } from 'react'
import { useGetEvents } from '../queries/useGetEvent'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Layout/Container'
import Event from '../components/Event'
import NextImage from '../components/NextImage'
import NavSearch from '../components/NavSearch'
import FloatingActionButton from '../components/FloatingActionButton'
import foss from '../public/clubs/foss.png'
import bg from '../public/events/eventBG.jpg'
import { SiGooglecalendar } from 'react-icons/si'

const EventsPage = (): JSX.Element => {
  const { data: eventList = [], isSuccess } = useGetEvents()
  console.log('event list : ', eventList)
  const [filterValue, setFilterValue] = useState('All')
  const [searchValue, setSearchValue] = useState<string>('')

  const handleEventFilterParam =
    () => (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setFilterValue(value)
      console.log(filterValue)
    }

  const handleSearchParam = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    console.log(searchValue)
  }

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    alert(searchValue)
  }

  return (
    <Layout title="SLIIT RSVP | Events">
      <Navbar />
      <NextImage src={bg} alt="SLIIT EVENTS" />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10 "
      >
        <Container>
          <NavSearch
            handleFilterChange={handleEventFilterParam()}
            handleSearchParam={handleSearchParam()}
            formSubmit={formSubmit}
          />
          {isSuccess ? (
            <div className="flex flex-wrap px-6">
              {eventList.map((event) => (
                <Event
                  key={event?._id}
                  logo={foss}
                  title={event?.name}
                  category="Networking"
                  description={event?.description || ''}
                  date="JUNE 1,2021"
                  status={event?.status}
                />
              ))}
            </div>
          ) : (
            <div
              className=" flex justify-center items-center"
              style={{ height: '50vh' }}
            >
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gradientBlue" />
            </div>
          )}
        </Container>
        <FloatingActionButton
          icon={<SiGooglecalendar color="white" className="p-5 w-20 h-20" />}
        />
      </section>
      <Footer />
    </Layout>
  )
}

export default EventsPage
