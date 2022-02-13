import NoteList from '../../components/notes/NoteList'
import { getAllNotes } from '../../lib/notes'

const Notes = ({ notes }) => {
  return (
    <>
      <h1 className='text-2xl font-semibold mb-8'>Here are my notes</h1>
      <NoteList notes={notes} />
    </>
  )
}

export async function getStaticProps() {
  const notes = getAllNotes()

  return {
    props: { notes },
  }
}

export default Notes
