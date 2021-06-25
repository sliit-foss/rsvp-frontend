interface props {
  children: React.ReactNode
}

const Container = ({ children }: props) => {
  return <div className='max-w-7xl mx-auto sm:px-4 px-6'>{children}</div>
}

export default Container
