import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'

import Layout from '../components/layout/Layout'
import { Heading, p, Code, ResponsiveImage } from '../components/custom'

import '../styles/globals.css'

const components = {
  img: ResponsiveImage,
  code: Code,
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
