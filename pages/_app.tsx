import Navbar from '../components/Navbar'
import { Toaster } from '../node_modules/react-hot-toast/dist/index'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar />
  <Component {...pageProps} />
  <Toaster/>
  </>
  )
}

export default MyApp
