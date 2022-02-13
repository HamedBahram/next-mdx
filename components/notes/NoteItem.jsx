import Link from 'next/link'

const NoteItem = ({ note }) => {
  return (
    <li
      key={note.slug}
      className='flex-1 p-4 shadow dark:shadow-zinc-600 rounded-md'
    >
      <Link href={`/notes/${note.slug}`}>
        <a>
          <h3 className='text-xl font-medium mb-3'>{note.meta.title}</h3>
          <p>{note.meta.description}</p>
          <p>{note.meta.author}</p>
          <time>{note.meta.date}</time>
        </a>
      </Link>
    </li>
  )
}

export default NoteItem
