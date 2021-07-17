interface props {
  children: React.ReactNode
}

const Container = ({ children }: props): JSX.Element => {
  return (
    <div className="max-w-6xl lg:max-w-7xl mx-auto sm:px-4 px-6">
      {children}
    </div>
  )
}

export default Container
