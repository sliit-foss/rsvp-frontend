interface props {
  selectedMenuOption: string
  onMenuItemSelect: any
}

const BottomBar = ({
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
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-l from-purple-light to-purple-dark inline-flex items-center justify-between px-3 py-2">
      <div className=" sm:text-lg text-white font-medium cursor-default">
        Management
      </div>
      <div className="inline-flex items-center space-x-2 sm:space-x-3">
        {menuItems.map((menuOption, index) => (
          <button
            key={index}
            onClick={onMenuItemSelect.bind(this, menuOption)}
            className={`hover:bg-purple-dark rounded-md shadow-lg hover:shadow-xl flex flex-col justify-center items-center transition ease-in duration-200 text-white font-medium text-center px-2 py-3 ${
              selectedMenuOption == menuOption ||
              (menuOption == 'Events' &&
                (selectedMenuOption == 'Attendees' ||
                  selectedMenuOption == 'AddEvent'))
                ? 'bg-purple-dark'
                : 'bg-purple-light'
            }`}
          >
            {menuOption}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BottomBar
