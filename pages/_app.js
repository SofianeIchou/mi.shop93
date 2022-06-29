import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { WhatsAppChat } from '../components/WhatsappChat'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Footer />
      <WhatsAppChat />
    </ChakraProvider>
  )
}

export default MyApp