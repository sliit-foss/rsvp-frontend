interface ButtonProps {
  value: string
  buttonStyles?: string
}

const Button = ({ value }: ButtonProps): JSX.Element => {
  return (
    <button
      className="py-2 px-8 text-white bg-gradientBlue rounded-lg shadow-md hover:bg-gradientPurple duration-150 transition ease-in font-medium"
      type="button"
    >
      {value}
    </button>
  )
}

export default Button
