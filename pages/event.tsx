import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Layout/Container'
import picture from '../public/dummypost.png'
import HappeningNow from '../modules/EventPage/HappeningNow'
import UpcomingSection from '../modules/EventPage/UpcomingSection'

export interface PostProps {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostsProps {
  posts: PostProps[]
}

export interface SectionProps {
  posts: PostProps[]
  picture: StaticImageData
}

const event = ({ posts }: PostsProps): JSX.Element => {
  return (
    <Layout title="SLIIT RSVP | Events">
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/events.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10"
      >
        <Container>
          <HappeningNow posts={posts} picture={picture} />
          <UpcomingSection posts={posts} picture={picture} />
        </Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default event

export const getServerSideProps: GetServerSideProps = async () => {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8'

  const posts = await fetch(postUrl).then((res) => res.json())

  return {
    props: {
      posts,
    },
  }
}
