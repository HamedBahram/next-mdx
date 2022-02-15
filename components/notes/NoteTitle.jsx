const NoteTitle = ({ children }) => {
  return (
    <h1 className='text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4'>
      {children}
    </h1>
  )
}

export default NoteTitle
