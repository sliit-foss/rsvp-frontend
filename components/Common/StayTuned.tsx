interface props {
  filterValue: string
}

const StayTuned = ({ filterValue }: props): JSX.Element => {
  return (
    <div className="w-full flex-col justify-center items-center">
      <div className="font-inter font-bold text-5xl md:text-6xl lg:text-7xl text-center text-lightBlue mt-40 mb-10 px-5 animate-pulse">
        STAY TUNED
      </div>
      <div className="font-inter font-semibold text-xl lg:text-2xl text-center mb-20 px-8 text-gray-800">
        {filterValue === 'Upcoming'
          ? 'Sorry, there are no upcoming events at the moment. '
          : filterValue === 'Happening Now'
          ? 'Sorry, no events are taking place at the moment. '
          : `There are no ${filterValue.toLowerCase().replaceAll("all","")} events at the moment. `}
        We&apos;ll be sure to update the page once any do
      </div>
    </div>
  )
}

export default StayTuned
