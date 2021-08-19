import NextImage from '../NextImage'
import image from '../../public/sideNav/image.svg'
import { Dispatch, SetStateAction } from 'react'

interface props {
  selectedMenuOption: string
  onMenuItemSelect: Dispatch<SetStateAction<string>>
}

const SideNav = ({
  selectedMenuOption,
  onMenuItemSelect,
}: props): JSX.Element => {
  const menuItems = ['Users', 'Events', 'Account']
  console.log(selectedMenuOption)
  return (
    <div className="md:col-span-2 md:flex flex-col w-full bg-purple-light hidden p-4">
      <div className="md:flex flex-col">
        <div className="text-3xl text-white font-medium text-center my-16">
          Management
        </div>

        {menuItems.map((menuOption, index) => (
          <button
            key={index}
            onClick={onMenuItemSelect.bind(this, menuOption)}
            className={`w-full hover:bg-purple-dark shadow-lg hover:shadow-xl flex flex-col justify-center items-center transition ease-in duration-200 text-xl text-white font-medium text-center p-4 my-2 ${
              selectedMenuOption == menuOption
                ? 'bg-purple-dark'
                : 'bg-purple-light'
            }`}
          >
            {menuOption}
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <NextImage
          classnames="flex items-center justify-center w-full my-8"
          src={image}
          alt="image"
          layout="intrinsic"
          quality={90}
        />
      </div>
    </div>
  )
}

export default SideNav
