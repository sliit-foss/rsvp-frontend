import NextImage from '../../Common/NextImage'
import image from '../../../public/admin/sideNav/image.svg'

interface props {
  selectedMenuOption: string
  onMenuItemSelect: any
}

const SideNav = ({
  selectedMenuOption,
  onMenuItemSelect,
}: props): JSX.Element => {
  const menuItems = ['Users', 'Events', 'Account']
  let userRole
  if (process.browser) {
    userRole = window.localStorage.getItem('Role')
  }
  if (userRole != 'Admin') {
    menuItems.shift()
  }
  return (
    <div className="md:col-span-2 md:flex flex-col w-full bg-gradient-to-b from-purple-light to-purple-dark hidden p-4">
      <div className="md:flex flex-col">
        <div className="text-3xl text-white font-semibold text-center my-16 cursor-default">
          Management
        </div>

        {menuItems.map((menuOption, index) => (
          <button
            key={index}
            onClick={onMenuItemSelect.bind(this, menuOption)}
            className={`w-full hover:bg-purple-dark shadow-lg hover:shadow-xl flex flex-col justify-center items-center transition ease-in duration-200 text-xl text-white font-medium text-center p-4 my-2 ${
              selectedMenuOption == menuOption ||
              (menuOption == 'Events' &&
                (selectedMenuOption == 'Attendees' ||
                  selectedMenuOption == 'Add/EditEvent'))
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
