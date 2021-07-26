import { useState } from 'react'
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
  console.log('event list : ', eventList)
  const [filterValue, setFilterValue] = useState('All')
  const [searchValue, setSearchValue] = useState<string>('')

  const handleEventFilterParam =
    () => (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setFilterValue(value)
    }

  const handleSearchParam = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    alert(searchValue)
  }

  let diplayEventList: Array<EventData> = []
  if (filterValue === 'Happening Now' || filterValue === 'Upcoming') {
    eventList.map((event) => {
      if (event.status === filterValue) {
        diplayEventList.push(event)
      }
    })
  } else {
    diplayEventList = eventList
  }

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
          />
          {isSuccess ? (
            diplayEventList.length != 0 ? (
              <div className="flex flex-wrap px-6">
                {diplayEventList.map((event) => (
                  <Event
                    key={event?._id}
                    id={event?._id}
                    imageURL={event?.headerImage}
                    title={event?.name}
                    category={event?.category}
                    description={event?.description || ''}
                    date={event?.date}
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
