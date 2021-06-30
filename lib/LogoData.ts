// partners logos
import foss_dark from '../public/logos/foss_dark.svg'
import Cs2 from '../public/logos/CS2.png'
import fcsc from '../public/logos/fcsc.png'
import se from '../public/logos/se.png'
import media from '../public/logos/media.png'
import mozilla from '../public/logos/mozilla.png'
import MSClubLogo from '../public/logos/MSClubLogo.png'

interface LogoProps {
    image: StaticImageData
    alt: string
}

export const logoData :LogoProps[] = [
    {
        image: foss_dark,
        alt: 'SLIIT FOSS'
    },
    {
        image: fcsc,
        alt: 'Faculty of computing Student Community'
    },
    {
        image: MSClubLogo,
        alt: 'SLIIT MS CLUB'
    },
    {
        image: media,
        alt: 'SLIIT Media'
    },
    {
        image: mozilla,
        alt: 'SLIIT Mozilla club'
    },
    {
        image: Cs2,
        alt: 'Cyber security community of SLIIT'
    },
    {
        image: se,
        alt: 'Software engineering Student community'
    },
]
