import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from './../styles/theme'
import localFont from '@next/font/local'
import Font from '@/fonts/Font'

const myFont = localFont({ src: './../fonts/CatchyMager-Normal.woff2' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Font /> */}
      <div className={myFont.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}
