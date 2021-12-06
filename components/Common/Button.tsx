interface ButtonProps {
  value: string
  onClick?: () => void
  width?: string
  padding?: string
  color?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({
  value,
  onClick,
  width,
  padding = 'py-2 px-8',
  color = 'bg-gradientBlue hover:bg-gradientPurple',
  type = 'button',
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${padding} ${width} ${color} text-white rounded-lg shadow-md duration-150 transition ease-in font-medium`}
      type={type}
    >
      {value}
    </button>
  )
}

export default Button
