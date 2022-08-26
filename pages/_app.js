import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navbar from '../components/Common/Header/Navbar'
import Footer from '../components/Common/Footer/Footer'
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {


  return <QueryClientProvider client={queryClient}>
    <Navbar />
    <div className='min-h-screen'>
      <Component {...pageProps} />
    </div>
    <Footer />
  </QueryClientProvider>


}

export default MyApp
