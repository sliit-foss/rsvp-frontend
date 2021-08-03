interface props {
  message: string
}

const FailedSnackbar = ({message}: props): JSX.Element => {
  return (
    <div className="flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300 h-20  shadow-md hover:shadow-lg transition ease-in duration-200">
      <div className="flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
        <span className="text-red-500">
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div className="ml-4">
        <div className="font-semibold text-lg text-red-800">Error</div>
        <div className="text-sm text-red-600">{message}</div>
      </div>
    </div>
  )
}

export default FailedSnackbar
