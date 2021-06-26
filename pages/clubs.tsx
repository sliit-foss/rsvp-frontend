import Image from 'next/image'

// components
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Layout/Container'

// images
import foss from '../public/clubs/foss.png'

import Club from "../components/Club";

const ClubsPage = (props:any) => {
    return (
        <Layout title='SLIIT RSVP | Clubs'>
            <Navbar/>
            <section
                style={{backgroundImage: 'url(/patterns/clubs.svg)'}}
                className='bg-no-repeat bg-right-top bg-cover py-10'
            >
                <Container>
                    <div className='grid grid-cols-2 grid-rows-1 md:gap-8 sm:gap-6 gap-5 max-w-4xl mx-auto'>

                        <Club
                            logo = {props.clubCardDetails.logo}
                            title = {props.clubCardDetails.title}
                        />

                    </div>
                </Container>
            </section>
            <Footer/>
        </Layout>
    )
};

ClubsPage.getInitialProps = () =>{
    let clubCardDetails = {
        logo:foss,
        title:'SLIIT FOSS Community'
    };
    return {
        clubCardDetails
    }
};

export default ClubsPage
