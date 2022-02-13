import Head from 'next/head'

const NoteLayout = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article className='prose max-w-none prose-pre:!p-0 dark:prose-invert'>
        {children}
      </article>
    </>
  )
}

export default NoteLayout
