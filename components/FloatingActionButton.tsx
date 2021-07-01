//props of Club Components
interface FloatingActionButtonProps {
  icon: JSX.Element
}

const FloatingActionButton = ({
  icon,
}: FloatingActionButtonProps): JSX.Element => {
    
  const handleClick = () => () => {
    alert('Gonna open calendar')
  }

  return (
    <tbody>
      <tr>
        <td className="sticky bottom-0 z-50 left-full">
          <button
            className="w-20 h-20 m-8 bg-gradientBlue rounded-full hover:bg-gradientPurple shadow hover:shadow-lg transition ease-in duration-200"
            onClick={handleClick()}
          >
            {icon}
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default FloatingActionButton
