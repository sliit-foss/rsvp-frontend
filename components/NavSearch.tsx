interface SearchProps {
  handleFilterChange: any
  handleSearchParam: any
  formSubmit: any
}

const NavSearch = ({
  handleFilterChange,
  handleSearchParam,
  formSubmit,
}: SearchProps): JSX.Element => {
  return (
    <div className="flex flex-col  px-6 mb-6  bg-white relative z-40 shadow ">
      <div className="w-full justify-center items-center block sm:flex ">
        <form
          className="relative w-full md:flex relative px-0 md:px-20 "
          onSubmit={formSubmit}
        >
          <select
            className="m-3 mt-5  mb-1 pl-10 md:pl-4  md:my-4 mx-0 md:mx-5 w-full md:w-4/12 h-12 md:h-auto rounded-sm"
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Happening Now">Happening Now</option>
            <option value="Upcoming">Upcoming</option>
          </select>
          <input
            type="search"
            name="search"
            required
            className="form-control w-full  my-4 border border-gray-300 rounded-sm pr-4 pl-10 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
            placeholder="Search for event..."
            onChange={handleSearchParam}
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
