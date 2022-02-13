import NoteItem from './NoteItem'

const NoteList = ({ notes }) => {
  return (
    <ul className='flex gap-4'>
      {notes.map(note => (
        <NoteItem key={note.slug} note={note} />
      ))}
    </ul>
  )
}

export default NoteList
