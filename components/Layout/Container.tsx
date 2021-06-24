interface props {
  children: React.ReactNode
}

const Container = ({ children }: props) => {
  return <div className='max-w-7xl mx-auto px-4'>{children}</div>
}

export default Container
