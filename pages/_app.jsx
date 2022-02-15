import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import SiteLayout from '../components/layout/site/SiteLayout'
import MDXComponents from '../components/mdx'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <MDXProvider components={MDXComponents}>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
