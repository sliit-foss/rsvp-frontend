interface ButtonProps {
  value: string
  buttonStyles?: string
}

<<<<<<< HEAD
const Button = ({ value, buttonStyles }: ButtonProps): JSX.Element => {
=======
const Button = ({ value }: ButtonProps): JSX.Element => {
>>>>>>> 746312e927b8929bd7d9fc65926c65a79dad881a
  return (
    <button
      className={`py-2 px-8 md:bg-gradientBlue bg-blue rounded-lg shadow-md hover:bg-gradientPurple duration-150 transition ease-in font-medium ${buttonStyles}`}
      type="button"
    >
      {value}
    </button>
  )
}

export default Button
