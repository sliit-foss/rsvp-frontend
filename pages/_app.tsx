import '../styles/globals.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/600.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
