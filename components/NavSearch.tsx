import AutoCompleteForm from './Common/AutocompleteForm'

interface SearchProps {
  handleFilterChange: any
  handleSearchParam: any
  formSubmit: any
  searchValue: string
  searchSuggestions: Array<string>
}

const NavSearch = ({
  handleFilterChange,
  handleSearchParam,
  formSubmit,
  searchValue,
  searchSuggestions,
}: SearchProps): JSX.Element => {
  return (
    <div className="flex flex-col  px-6 mb-6  bg-white relative z-20 shadow ">
      <div className="w-full justify-center items-center block sm:flex ">
        <form
          className="relative w-full md:flex relative px-0 md:px-20 "
          onSubmit={formSubmit}
        >
          <select
            className="m-3 mt-5  mb-1 pl-5 md:pl-8 md:my-4 mx-0 md:mx-5 w-full md:w-4/12 h-12 md:h-auto rounded-sm"
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Happening Now">Happening Now</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Closed">Closed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Postponed">Postponed</option>
          </select>
          <AutoCompleteForm
            value={searchValue}
            setValue={handleSearchParam}
            suggestions={searchSuggestions}
            placeholder="Search for event..."
          />
          <button
            type="submit"
            className="m-3 mt-0  md:my-4 mx-0 md:mx-5 w-full md:w-1/4 h-10 md:h-auto text-lg font-semibold bg-gradientBlue text-white md:text-white  shadow-xl hover:bg-gradientPurple duration-150 transition ease-in font-medium hover:text-white "
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
export default NavSearch
