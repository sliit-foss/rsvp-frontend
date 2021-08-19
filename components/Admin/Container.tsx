interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <div className="sticky lg:absolute top-0 right-0 w-full lg:w-9/12 2xl:w-10/12 h-full lg:h-95vh mt-0 lg:mt-14 z-0 flex justify-center items-center">
      <div className="w-11/12 h-85vh-50 lg:h-85vh bg-white shadow-xl rounded-xl lg:rounded-3xl mb-16 lg:mb-0">
        {children}
      </div>
    </div>
  )
}

export default Container
