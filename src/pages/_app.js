import '../styles/globals.css'
import ProductProvider from '../contexts/Product/provider.tsx'

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  )
}

export default MyApp
