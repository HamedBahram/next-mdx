import Header from './Header'
import Footer from './Footer'

const SiteLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='px-4 mb-16 max-w-2xl mx-auto'>{children}</main>
      <Footer />
    </>
  )
}

export default SiteLayout
