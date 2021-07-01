import { useState } from 'react'

const NavSearch = (): JSX.Element => {
    const [searchValue, setsearchValue] = useState("");

  const handleParam = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    console.log(value);
    setsearchValue(value);
  }

  // on Submit
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    alert(searchValue)
  }

  return (
    <div className="flex flex-col  px-6 mb-6  bg-white relative z-50 shadow ">
      <div className="w-full justify-center items-center block sm:flex ">
        <form className="relative w-full md:flex relative px-0 md:px-20 " onSubmit={formSubmit}>
          <input
            type="search"
            name="search"
            required
            className="form-control w-full  my-4 border border-gray-300 rounded-sm pr-4 pl-10 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
            placeholder="Search for event..."
            onChange={handleParam()}
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
