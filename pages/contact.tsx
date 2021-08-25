import Layout from '../components/Layout'
import ContactForm from '../components/ContactUs/ContactForm'
import Footer from '../components/Layout/Footer'
import InfoCards from '../components/ContactUs/InfoCards'
import Navbar from '../components/Layout/Navbar'
import Container from '../components/Layout/Container'

const Contact = (): JSX.Element => {
  return (
    <Layout title="Contact | RSVP SLIIT">
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10"
      >
        <ContactForm />
        <Container>
          <InfoCards />
        </Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default Contact
