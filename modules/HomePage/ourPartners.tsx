import Image from 'next/image'

import Container from '../../components/Layout/Container'

// partners logos
import foss_dark from '../../public/logos/foss_dark.svg'
import Cs2 from '../../public/logos/CS2.png'
import fcsc from '../../public/logos/fcsc.png'
import se from '../../public/logos/se.png'
import media from '../../public/logos/media.png'
import mozilla from '../../public/logos/mozilla.png'
import MSClubLogo from '../../public/logos/MSClubLogo.png'

const OurPartners = () => {
  return (
    <Container>
      <section>
        <h2>Our Partners</h2>
        <p>
          A very big thank you to all our partners for their continued
          partnership. If you’re interested in being showcased throughout ,
          contact SLIIT FCSC to discuss sponsorship opportunities.
        </p>
        <div>
          <Image
            src={foss_dark}
            alt='SLIIT FOSS'
            layout='intrinsic'
            quality={90}
          />
          <Image
            src={fcsc}
            alt='Faculty of computing Student Community'
            layout='intrinsic'
            quality={90}
          />
          <Image
            src={MSClubLogo}
            alt='SLIIT MS CLUB'
            layout='intrinsic'
            quality={90}
          />
          <Image
            src={media}
            alt='SLIIT Media'
            layout='intrinsic'
            quality={90}
          />
          <Image
            src={mozilla}
            alt='SLIIT Mozilla club'
            layout='intrinsic'
            quality={90}
          />
          <Image
            src={Cs2}
            alt='Cyber security community of SLIIT'
            layout='intrinsic'
            quality={90}
          />
          <Image
            src={se}
            alt='Software engineering Student community'
            layout='intrinsic'
            quality={90}
          />
        </div>
      </section>
    </Container>
  )
}

export default OurPartners
