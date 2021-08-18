interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <div className="sticky lg:absolute top-0 right-0 w-full lg:w-9/12 2xl:w-10/12 h-full lg:h-95vh mt-0 lg:mt-14 z-0">
      {children}
    </div>
  )
}

export default Container
