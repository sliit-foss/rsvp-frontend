import NextImage from '../NextImage'
import image from '../../public/sideNav/image.svg'

interface props {
  selectedMenuOption: string
  onMenuItemSelect: any
}

const SideNav = ({
  selectedMenuOption,
  onMenuItemSelect,
}: props): JSX.Element => {
  const menuItems = ['Users', 'Events', 'Account']
  console.log(selectedMenuOption)
  return (
    <div>
      {/* for wider screens */}
      <header className="sticky bottom-0 md:left-0 flex flex-col w-full lg:w-3/12 2xl:w-2/12 h-0 lg:h-95vh justify-between items-center shadow-noOffset z-10 bg-purple-light opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto">
        <div className="w-full h-full flex flex-col ">
          <div className="text-3xl text-white font-medium mt-20 text-center">
            Management
          </div>
          <div className="h-12"></div>

          {menuItems.map((menuOption, index) => (
            <button
              key={index}
              onClick={onMenuItemSelect.bind(this, menuOption)}
            >
              <div
                className={`w-full h-14 mt-3 hover:bg-purple-dark shadow-lg hover:shadow-xl flex flex-col justify-center items-center transition ease-in duration-200 ${
                  selectedMenuOption == menuOption
                    ? 'bg-purple-dark'
                    : 'bg-purple-light'
                }`}
              >
                <div className="text-xl text-white font-medium text-center">
                  {menuOption}
                </div>
              </div>
            </button>
          ))}
          <div className="flex justify-center items-center absolute bottom-0">
            <NextImage
              classnames="flex items-center justify-center w-full my-8"
              src={image}
              alt="image"
              layout="intrinsic"
              quality={90}
            />
          </div>
        </div>
      </header>
      {/* for mobile screens */}
      <header className="fixed bottom-0 w-full shadow-noOffset z-10 bg-purple-light lg:opacity-0 lg:pointer-events-none h-16 lg:h-0">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="text-lg text-white font-medium text-center mx-5 w-32">
            Management
          </div>
          <div className="h-16 w-auto"></div>

          {menuItems.map((menuOption, index) => (
            <button
              className="w-full"
              key={index}
              onClick={onMenuItemSelect.bind(this, menuOption)}
            >
              <div
                className={`h-16 hover:bg-purple-dark shadow-lg hover:shadow-xl flex flex-col justify-center items-center transition ease-in duration-200 ${
                  selectedMenuOption == menuOption
                    ? 'bg-purple-dark'
                    : 'bg-purple-light'
                }`}
              >
                <div className="text-sm text-white font-medium text-center mt-1">
                  {menuOption}
                </div>
              </div>
            </button>
          ))}
        </div>
      </header>
    </div>
  )
}

export default SideNav
