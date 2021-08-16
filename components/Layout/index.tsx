import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  image?: string
}

const Layout = ({
  children,
  title,
  description,
  image,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title || 'RSVP | SLIIT FOSS'}</title>
        <meta
          name="description"
          content={
            description ||
            "Here, at SLIIT, our intention is to improve people's life, and as we see education is the greatest opportunity that can be given to a person. We want to create a better society, where we can all develop our maximum potential through what we are passionate about. We talk to opinion leaders, philosophers, industrial experts and teachers who help us to be better people. We want to give society tools, experiences and knowledge so that all people can develop and have the best opportunities."
          }
        />
        <meta name="image" content={image || '/favicon.png'} />
        <meta property="og:title" content={title || 'RSVP | SLIIT FOSS'} />
        <meta
          property="og:description"
          content="Here, at SLIIT, our intention is to improve people's life, and as we see education is the greatest opportunity that can be given to a person. We want to create a better society, where we can all develop our maximum potential through what we are passionate about. We talk to opinion leaders, philosophers, industrial experts and teachers who help us to be better people. We want to give society tools, experiences and knowledge so that all people can develop and have the best opportunities."
        />
        <meta property="og:image" content={image || '/favicon.png'} />
        <meta name="twitter:creator" content="@fosssliit" />
        <meta name="twitter:title" content={title || 'RSVP | SLIIT FOSS'} />
        <meta
          name="twitter:description"
          content="Here, at SLIIT, our intention is to improve people's life, and as we see education is the greatest opportunity that can be given to a person. We want to create a better society, where we can all develop our maximum potential through what we are passionate about. We talk to opinion leaders, philosophers, industrial experts and teachers who help us to be better people. We want to give society tools, experiences and knowledge so that all people can develop and have the best opportunities."
        />
        <meta name="twitter:image" content={image || '/favicon.png'} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-bgWhite text-textBlack font-inter min-h-screen overflow-x-hidden">
        {children}
      </main>
    </>
  )
}

export default Layout
