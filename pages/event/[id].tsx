import { GetServerSideProps } from 'next'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Container from '../../components/Layout/Container'
import Navbar from '../../components/Navbar'
import { PostProps } from '../event'

interface SingleEventProps {
  post: PostProps
}

const SingleEventPage = ({ post }: SingleEventProps): JSX.Element => {
  const { title, body } = post
  return (
    <Layout title={`SLIIT RSVP | ${title}`}>
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/single-event.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10"
      >
        <Container>{title}</Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default SingleEventPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id
  const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`

  const post = await fetch(postUrl).then((res) => res.json())

  return {
    props: {
      post,
    },
  }
}
