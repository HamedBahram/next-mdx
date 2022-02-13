import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='px-4 mb-8 max-w-2xl mx-auto'>{children}</main>
    </>
  )
}

export default Layout
