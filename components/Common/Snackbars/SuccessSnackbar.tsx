interface props {
  action: string
}

const SuccessSnackbar = ({ action }: props): JSX.Element => {
  return (
    <div className="flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300 h-20 w-64 shadow-md hover:shadow-lg transition ease-in duration-200">
      <div className="flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
        <span className="text-green-500">
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div className="ml-4">
        <div className="font-semibold text-lg text-green-800">Success</div>
        <div className="text-sm text-green-600">
          {action === 'signIn'
            ? 'Signed in sucessfully!'
            : 'Signed up sucessfully!'}
        </div>
      </div>
    </div>
  )
}

export default SuccessSnackbar
