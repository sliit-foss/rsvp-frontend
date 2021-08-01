import { useState, useEffect } from 'react'
import { useGetEvents } from '../../queries/useGetEvent'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Container from '../../components/Layout/Container'
import Event from '../../components/Event'
import NextImage from '../../components/NextImage'
import NavSearch from '../../components/NavSearch'
import FloatingActionButton from '../../components/FloatingActionButton'
import StayTuned from '../../components/Common/StayTuned'
import bg from '../../public/events/eventBG.jpg'
import { SiGooglecalendar } from 'react-icons/si'
import { EventData } from '../api/event/event.interface'

const AllEvents = (): JSX.Element => {
  const { data: eventList = [], isSuccess } = useGetEvents()
  const [filterValue, setFilterValue] = useState('All')
  const [searchValue, setSearchValue] = useState('')
  const [events, setEvents] = useState<Array<EventData>>([])

  useEffect(() => {
    if (filterValue!=='All') {
      const list: Array<EventData> = eventList?eventList.filter((event) => {
        return event.status === filterValue
      }):[]
      setEvents(list)
    } else {
      setEvents(eventList)
    }
  }, [filterValue, eventList])

  const handleEventFilterParam =
    () => (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setFilterValue(value)
      setSearchValue('')
    }

  const handleSearchParam = () => (value: string) => {
    if (value === '') {
      setEvents(eventList)
    }
    setSearchValue(value)
  }

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchValue != '') {
      const list: Array<EventData> = eventList?eventList.filter((event) => {
        return event.name === searchValue
      }):[]
      setEvents(list)
    }
  }

  const searchSuggestions: Array<string> = eventList?eventList.map((event) => {
    return event.name
  }):[]

  return (
    <Layout title="Events | RSVP SLIIT">
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
            searchValue={searchValue}
            searchSuggestions={searchSuggestions}
          />
          {isSuccess && eventList? (
            events.length != 0 ? (
              <div className="flex flex-wrap px-6">
                {events.map((event) => (
                  <Event
                    key={event?._id}
                    id={event?._id}
                    imageURL={event?.headerImage}
                    title={event?.name}
                    category={event?.category}
                    description={event?.description || ''}
                    startTime={event?.startTime}
                    status={event?.status}
                  />
                ))}
              </div>
            ) : (
              <StayTuned filterValue={filterValue} />
            )
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

export default AllEvents
