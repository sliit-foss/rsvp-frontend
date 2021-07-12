interface ButtonProps {
  value: string
}

const Button = ({ value }: ButtonProps): JSX.Element => {
  return (
    <button
      className="py-2 px-8 md:bg-gradientBlue bg-blue rounded-lg shadow-md hover:bg-gradientPurple duration-150 transition ease-in font-medium"
      type="button"
    >
      {value}
    </button>
  );
};

export default Button
