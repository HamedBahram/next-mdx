import { useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { ocean } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const Heading = {
  H1: ({ children }) => <h1 className='text-3xl font-bold'>{children}</h1>,
  H2: ({ children }) => <h2 className='text-2xl font-semibold'>{children}</h2>,
}

export const p = props => {
  return <p className='mb-4' {...props} />
}

export const ResponsiveImage = props => (
  <Image
    src={props.src}
    alt={props.alt}
    title={props.title}
    width={600}
    height={300}
    layout='responsive'
    objectFit='cover'
    objectPosition='center'
    className='rounded-md'
  />
)

export const Code = ({ className, children, ...props }) => {
  const { theme, systemTheme, setTheme } = useTheme()
  useEffect(() => {
    systemTheme && setTheme(systemTheme)
  }, [systemTheme, setTheme])

  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag='div'
      style={ocean}
      customStyle={{
        // background: theme === 'light' ? '#20232a' : '#fff',
        borderRadius: '5px',
        padding: '1rem',
      }}
      showLineNumbers
      lineNumberStyle={{
        color: '#d08770',
        fontSize: '14px',
        marginRight: '0.5rem',
      }}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code
      className='font-mono text-sm font-medium tracking-wider text-blue-400'
      {...props}
    >
      {children}
    </code>
  )
}
