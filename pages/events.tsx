import { useState } from 'react'

// components
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Layout/Container'
import Event from '../components/Event'
import NextImage from '../components/NextImage'
import NavSearch from '../components/NavSearch'
import FloatingActionButton from '../components/FloatingActionButton'

// images
import foss from '../public/clubs/foss.png'
import bg from '../public/events/eventBG.jpg'

//Icons
import { SiGooglecalendar } from 'react-icons/si'

const EventsPage = (): JSX.Element => {
  const [filterValue, setFilterValue] = useState('All')
  const [searchValue, setSearchValue] = useState('')

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
          <div className="flex flex-wrap px-6">
            <Event
              logo={foss}
              title="Networking Fundamentals"
              category="Networking"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas sapiente voluptate earum consequatur rem, vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="JUNE 1,2021"
              happeningNowStatus={true}
            />
            <Event
              logo={foss}
              title="AWS Bootcamp"
              category="Cloud Comupting"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas sapiente voluptate earum natus facilis dolor deserunt dolorum
              tempora obcaecati consequatur rem, vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="JUNE 12,2021"
              happeningNowStatus={true}
            />
            <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
              happeningNowStatus={false}
            />
            <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
              happeningNowStatus={false}
            />
            <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
              happeningNowStatus={false}
            />
            <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
              happeningNowStatus={false}
            />
            <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
              happeningNowStatus={false}
            />
            <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
              happeningNowStatus={false}
            />
          </div>
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
