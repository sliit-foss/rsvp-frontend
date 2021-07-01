//props of Club Components
interface FloatingActionButtonProps {
  icon:JSX.Element
}

const FloatingActionButton = ({
  icon,
}: FloatingActionButtonProps): JSX.Element => {
  return (
    <tr>
      <div className="sticky bottom-0 z-50 left-full">
        <button className="w-20 h-20 m-8 bg-gradientBlue rounded-full hover:bg-gradientPurple shadow hover:shadow-lg transition ease-in duration-200">
          {icon}
        </button>
      </div>
    </tr>
  )
}

export default FloatingActionButton
