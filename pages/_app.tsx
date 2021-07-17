import '../styles/globals.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/600.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
