interface ButtonProps {
  value: string
  onClick?: () => void
  width?: string
  padding?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({
  value,
  onClick,
  width,
  padding = 'py-2 px-8',
  type = 'button',
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${padding} ${width} text-white bg-gradientBlue rounded-lg shadow-md hover:bg-gradientPurple duration-150 transition ease-in font-medium`}
      type={type}
    >
      {value}
    </button>
  )
}

export default Button
