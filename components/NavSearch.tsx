import {useState} from "react";



const NavSearch = (): JSX.Element => {

    const [searchValue , setsearchValue] = useState({
        "value":"",
    })

    const handleChange= (event)=> {
        setInputField( {event.target.value} )
      }
    
     const handleSubmit=(event) =>{
        alert('A name was submitted: ' + searchValue);
        event.preventDefault();
      }

  return (
    <div className="flex flex-col sm:flex-row sm:h-20 px-6 mb-6  bg-white relative z-50 shadow">
      <div className="w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex">
        <form className="relative w-full">
          <input
            type="search"
            className="w-full max-w-full border border-gray-300 rounded-sm pr-4 pl-10 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
            placeholder="Search for event..."
          />
        </form>
      </div>
    </div>
  )
}
export default NavSearch