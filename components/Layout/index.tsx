import Head from 'next/head'

interface props {
  children: React.ReactNode
  title: String
}

const Layout = ({ children, title }: props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='bg-bgWhite text-textBlack font-inter min-h-screen'>
        {children}
      </main>
    </>
  )
}

export default Layout
