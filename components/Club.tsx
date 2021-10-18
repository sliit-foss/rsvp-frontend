import Image from 'next/image'

interface ClubProps {
  logo: StaticImageData
  title: string
}

const Club = ({ logo, title }: ClubProps): JSX.Element => {
  return (
    <div className="relative group flex items-center justify-end max-w-md mx-auto overflow-hidden shadow-md hover:shadow-lg rounded-xl transition duration-500">
      <Image
        className="rounded-xl"
        src={logo}
        alt="SLIIT FOSS"
        quality={90}
        layout="intrinsic"
        placeholder="blur"
      />
      <div className="absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-gradientBlue to-gradientPurple rounded-xl md:group-hover:p-4">
        <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center mb-4">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default Club
