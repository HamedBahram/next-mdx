import NotePreview from './NotePreview'

const NoteList = ({ notes }) => {
  return (
    <ul className='flex gap-4'>
      {notes.map(note => (
        <NotePreview key={note.slug} note={note} />
      ))}
    </ul>
  )
}

export default NoteList
