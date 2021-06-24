interface props {
  value: string
}

const Button = ({ value }: props) => {
  return (
    <button
      className='py-2 px-8 md:bg-gradientBlue bg-blue rounded-lg hover:bg-gradientPurple duration-150 transition ease-in font-medium'
      type='button'
    >
      {value}
    </button>
  )
}

export default Button
