import Head from 'next/head'
import NoteBody from '../../notes/NoteBody'
import NoteHeader from '../../notes/NoteHeader'

const NoteLayout = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/lioshi.min.css'
        />
      </Head>
      <NoteHeader meta={meta} />
      <NoteBody content={children} />
    </>
  )
}

export default NoteLayout
