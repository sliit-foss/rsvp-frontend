

// components
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Layout/Container'
import Event from '../components/Event'
import NextImage from '../Components/NextImage'
import NavSearch from '../Components/NavSearch'

// images
import foss from '../public/clubs/foss.png'
import bg from '../public/events/eventBG.jpg'


const EventsPage = (): JSX.Element => {
  return (
    <Layout title="SLIIT RSVP | Clubs">
      <Navbar />
      <NextImage
      src={bg}
      alt="SLIIT EVENTS"
      />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10"
      >
        <Container>
          <NavSearch/>
          <div className="flex flex-wrap px-6">
            <Event
              logo={foss}
              title="Networking Fundamentals"
              category="Networking"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas sapiente voluptate earum consequatur rem, vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="JUNE 1,2021"
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
            />
              <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
            />
                <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
            />
                <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
            />
                <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
            />
                <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
            />
                <Event
              logo={foss}
              title="Flutter Bootcamp"
              category="Mobile Dev"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio perferendis
              tempore nemo sequi eos accusantium."
              date="AUGUST 3,2021"
            />
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default EventsPage
